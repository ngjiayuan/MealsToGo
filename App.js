import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/app";

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

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyA86q0VCG1L_ujKlmrtwcgtDGRGlx2vuIE",
  authDomain: "mealstogo-a71c7.firebaseapp.com",
  projectId: "mealstogo-a71c7",
  storageBucket: "mealstogo-a71c7.appspot.com",
  messagingSenderId: "842919493977",
  appId: "1:842919493977:web:010de2087d7c691202cc48",
  measurementId: "G-4CZKRZMCFB",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        <AuthenticationContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
