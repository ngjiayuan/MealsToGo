import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useRobotoMono,
  RobotoMono_400Regular,
} from "@expo-google-fonts/roboto-mono";

import { Restaurants } from "./src/features/restaurant/screens/restaurant-screen";
import { Maps } from "./src/features/maps/screens/maps-screen";
import { Settings } from "./src/features/settings/screens/settings-screen";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Map: "map-outline",
  Settings: "settings-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
  });

  const [robotoMonoLoaded] = useRobotoMono({
    RobotoMono_400Regular,
  });

  if (!robotoLoaded || !poppinsLoaded || !robotoMonoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "white",
                activeBackgroundColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={Restaurants} />
              <Tab.Screen name="Map" component={Maps} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
