import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Restaurants } from "../../features/restaurant/screens/restaurant-screen";
import { RestaurantDetail } from "../../features/restaurant/screens/restaurant-detail";

const RestaurantsStack = createStackNavigator();

export function RestaurantsNavigator() {
  return (
    <RestaurantsStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantsStack.Screen name="Restaurants" component={Restaurants} />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantsStack.Navigator>
  );
}
