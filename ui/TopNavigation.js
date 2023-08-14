import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

const TopNavigation = () => {
  return (
    <View>
      <StatusBar networkActivityIndicatorVisible />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 393,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
    // backdropFilter: blur(10),
  },
  statusbar: {
    display: "flex",
    height: 53,
    justifyContent: "center",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
});

export default TopNavigation;
