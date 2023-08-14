import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import List from "./HomeList";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.heroImage}
        source={require("../../assets/hero.png")}
      >
        <View style={styles.navbarContainer}>
          <Navbar showArrow={false} />
        </View>
      </ImageBackground>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 1282,
    borderRadius: 48,
    backgroundColor: "#E5E5E5",
  },
  heroImage: {
    width: 393,
    height: 400,
    paddingHorizontal: 24,
  },
  navbarContainer: {
    marginTop: 80,
  },
});

export default Home;
