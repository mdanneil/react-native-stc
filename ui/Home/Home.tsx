import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import List from "./HomeList";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbarContainer}>
        <Navbar showArrow={false} />
      </View>
      <ImageBackground
        style={styles.heroImage}
        source={require("../../assets/hero.png")}
      >
        <Text style={styles.heroText}>Our Gyms</Text>
      </ImageBackground>
      <View style={styles.listContainer}>
        <List />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 1282,
    borderRadius: 48,
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  heroImage: {
    width: 393,
    height: 400,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexShrink: 0,
    gap: 8,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  navbarContainer: {
    position: "absolute",
    top: 80,
    zIndex: 1,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    color: "#FFFFFF",
    fontFamily: "WorkSans",
    fontSize: 56,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 61.6,
  },
  listContainer: {
    flex: 1,
    paddingBottom: 24,
  },
});

export default Home;
