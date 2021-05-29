import React, { useContext } from "react";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantCard } from "../components/restaurant-card";
import { SafeArea } from "../../../components/safearea";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing.m};
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.yellow};
  padding: ${(props) => props.theme.spacing.m};
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export function Restaurants() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <ListContainer>
          {isLoading && (
            <LoadingContainer>
              <ActivityIndicator size={50} animating={true} color="grey" />
            </LoadingContainer>
          )}
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return <RestaurantCard restaurant={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </ListContainer>
      </SafeArea>
    </>
  );
}
