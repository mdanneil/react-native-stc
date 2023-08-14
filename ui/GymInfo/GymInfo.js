import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopNavigation from "../TopNavigation";
import GymInfoList from "./GymInfoList";

const HeroContainer = ({ gym }) => {
  return (
    <View>
      <ImageBackground
        style={styles.heroImage}
        source={require("../../assets/gymInfoHero.png")}
      >
        <Text style={styles.GymName}>{gym.name}</Text>
        <Text style={styles.gymAdress}>
          <Text>{gym.address.street}</Text>
          {"\n"}
          <Text>
            {gym.address.postalCode} {gym.address.city}{" "}
          </Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const GymInfo = ({ route }) => {
  const gym = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation />
      <HeroContainer gym={gym} />
      <Text style={styles.upcomingSessions}>Upcoming sessions</Text>
      <GymInfoList gym={gym} />
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
    width: 393,
    height: 400,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 8,
    flexShrink: 0,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  GymName: {
    color: "red",
    fontFamily: "WorkSans",
    fontSize: 56,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 61.6,
  },
  gymAdress: {
    color: "red",
    fontFamily: "WorkSans",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 17.6,
  },
  upcomingSessions: {
    color: "#171515",
    fontFamily: "WorkSans",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 22.4 /* 22.4px */,
    opacity: 0.7,
    paddingHorizontal: 24,
  },
});

export default GymInfo;
