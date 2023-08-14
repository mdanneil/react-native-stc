import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const HomeCard = ({ name }) => {
  return (
    <View style={styles.cardLayout}>
      <Text style={styles.cardStyle}>{name}</Text>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        style={styles.arrow}
      >
        <Path
          d="M3.75 12L20.25 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.5 18.75L20.25 12L13.5 5.25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    display: "flex",
    width: 345,
    height: 136,
    padding: 26,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 16,
    backgroundColor: "#171515",
    marginBottom: 16,
  },
  cardStyle: {
    color: "#fff",
  },
  arrow: {
    position: "absolute",
    right: 16,
    bottom: 20,
    opacity: 0.7,
  },
});

export default HomeCard;
