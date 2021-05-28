import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { fontsize, spacing } from "../../../utils/sizes";
import { RestaurantCard } from "../components/restaurant-card";

export function Restaurant() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <RestaurantCard />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "pink",
  },
  search: {
    padding: spacing.m,
  },
  list: {
    flex: 1,
    backgroundColor: "orange",
    padding: spacing.m,
  },
});
