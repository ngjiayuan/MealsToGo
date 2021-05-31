import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { RestaurantCard } from "../components/restaurant-card";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/safearea";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.yellow};
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export function Restaurants({ navigation }) {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <>
      <SafeArea>
        <Search />
        <ListContainer>
          {isLoading && (
            <LoadingContainer>
              <ActivityIndicator size={50} animating={true} color="grey" />
            </LoadingContainer>
          )}
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.contentContainer}
          />
        </ListContainer>
      </SafeArea>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
});
