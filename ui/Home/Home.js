import { Image, SafeAreaView, StyleSheet } from "react-native";
import List from "./HomeList";
import TopNavigation from "../TopNavigation";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation />
      <Image
        style={styles.heroImage}
        source={require("../../assets/hero.png")}
      />
      <List />
    </SafeAreaView>
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
    display: "flex",
    width: 393,
    height: 400,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 8,
    flexShrink: 0,
  },
});

export default Home;