import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import FilledStar from "../../../../assets/filledstar.svg";
import EmptyStar from "../../../../assets/emptystar.svg";
import NowOpen from "../../../../assets/open.svg";
import NowClosed from "../../../../assets/closed.svg";

const InfoCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.white};
  margin-bottom: ${(props) => props.theme.spacing.m};
`;

const CardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.white};
  padding: ${(props) => props.theme.spacing.m};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.poppins};
  font-size: ${(props) => props.theme.fontSizes.m};
  padding-left: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.s};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.robotoMono};
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding-left: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.m};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-left: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.s};
  padding-right: ${(props) => props.theme.spacing.m};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export function RestaurantCard({ restaurant = {} }) {
  const {
    name = "Restaurant Name",
    photos = [
      "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg",
    ],
    address = "123 Restaurant Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const nonRatingArray = Array.from(new Array(5 - Math.floor(rating)));

  return (
    <>
      <InfoCard elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <FilledStar
                key={`${name}-${i}`}
                width={16}
                height={16}
                fill="#000"
              />
            ))}
            {nonRatingArray.map((_, i) => (
              <EmptyStar
                key={`${name}-${i}`}
                width={16}
                height={16}
                fill="#000"
              />
            ))}
            <SectionEnd>
              {isOpenNow && !isClosedTemporarily ? (
                <NowOpen width={20} height={20} fill="green" />
              ) : (
                <NowClosed width={20} height={20} fill="red" />
              )}
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </InfoCard>
    </>
  );
}
