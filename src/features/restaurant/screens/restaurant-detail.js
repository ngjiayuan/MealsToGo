import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { List, DefaultTheme } from "react-native-paper";

import { RestaurantCard } from "../components/restaurant-card";

const theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffb347",
  },
};

const DetailContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.green};
`;

export function RestaurantDetail({ route }) {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <DetailContainer>
      <RestaurantCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          theme={theme}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="bfplaceholder" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          theme={theme}
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="lunchplaceholder" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          theme={theme}
          left={(props) => <List.Icon {...props} icon="food-steak" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="dinnerplaceholder" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          theme={theme}
          left={(props) => <List.Icon {...props} icon="glass-wine" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="drinksplaceholder" />
        </List.Accordion>
      </ScrollView>
    </DetailContainer>
  );
}
