import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import GymInfoList from "./GymInfoList";
import Navbar from "../Navbar";
import { Club } from "../../Types/Club";

const windowWidth = Dimensions.get("window").width;
const HeroContainer = ({ gym }: { gym: Club }) => {
  const fontSize = Math.min(56, windowWidth * 0.1);
  return (
    <View>
      <ImageBackground
        style={styles.heroImage}
        source={require("../../assets/gymInfoHero.png")}
      >
        <View style={styles.navbarContainer}>
          <Navbar showArrow={true} />
        </View>
        <Text style={[styles.GymName, { fontSize }]}>
          {gym.name.replace(/^STC /, "")}
        </Text>
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
    <View style={styles.container}>
      <HeroContainer gym={gym} />
      <Text style={styles.upcomingSessions}>Upcoming sessions</Text>
      <GymInfoList gym={gym} />
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
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexShrink: 0,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  GymName: {
    color: "#FFFFFF",
    fontFamily: "WorkSans",
    fontSize: 56,
    fontStyle: "normal",
    fontWeight: "700",
  },
  gymAdress: {
    color: "#FFFFFF",
    fontFamily: "WorkSans",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 17.6,
  },
  upcomingSessions: {
    color: "#171515",
    fontFamily: "WorkSans",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 22.4,
    opacity: 0.7,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  navbarContainer: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GymInfo;
