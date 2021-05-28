import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

import { fontsize, spacing } from "../../../utils/sizes";

export function RestaurantCard({ restaurant = {} }) {
  const {
    name = "Restaurant Name",
    icon,
    photos = [
      "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg",
    ],
    address = "123 Restaurant Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Text style={styles.title}>{name}</Text>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: spacing.m,
    backgroundColor: "white",
  },
  title: {
    padding: spacing.m,
  },
});
