import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Card } from "react-native-paper";

const CardStyled = styled.View`
  max-width: 130px;
  padding: 10px;
  align-items: center;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
`;

const TextStyled = styled.Text`
  font-family: ${(props) => props.theme.fonts.poppins}
  text-align: center;
`;

export function MapCard({ restaurant }) {
  const Img = Platform.OS === "android" ? CompactWebview : CompactImage;

  return (
    <>
      <CardStyled>
        <Img source={{ uri: restaurant.photos[0] }} />
        <TextStyled>{restaurant.name}</TextStyled>
      </CardStyled>
    </>
  );
}
