import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const Navbar = ({ showArrow }) => {
  const navigation = useNavigation();

  const handleArrowPress = () => {
    if (showArrow) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      {showArrow ? (
        <TouchableOpacity
          style={showArrow ? styles.arrowLeft : styles.transparentArrowLeft}
          onPress={handleArrowPress}
        >
          <View style={styles.arrowLeft}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M20.25 12H3.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M10.5 5.25L3.75 12L10.5 18.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24, height: 24 }}></View>
      )}
      <View style={styles.logo}>
        <Svg
          width="57"
          height="25"
          viewBox="0 0 57 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.378 10.8995H55.3485L56.8145 6.40601H47.753C43.168 6.40601 39.427 7.87351 36.933 12.017C35.5765 14.364 34.512 17.115 34.512 19.7555C34.512 23.6065 37.3365 25 41.738 25H50.769L52.2225 20.523H43.716C41.848 20.523 41.115 19.7555 41.115 18.619C41.115 17.2265 41.7 15.614 42.324 14.475C43.389 12.4575 45.703 10.8995 48.378 10.8995Z"
            fill="white"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.31 20.5155C33.31 20.5155 31.955 20.505 30.886 20.5155C29.7405 20.527 29.0245 19.3565 29.299 18.506C29.5755 17.655 30.103 16.0495 30.103 16.0495L31.3855 12.1105H24.714L22.6675 18.3985C22.6865 18.3335 23.167 16.8605 22.331 19.426C21.5005 21.9725 23.3435 25.0025 26.4165 25H36.033C35.958 24.955 35.886 24.915 35.8145 24.8675C34.3445 23.8945 33.491 22.4045 33.31 20.5155Z"
            fill="white"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.6 13.6305H10.1625C9.785 13.6305 9.433 13.23 9.5595 12.847C10.0345 11.428 11.0955 10.88 12.126 10.88H36.4485L37.9025 6.4055H33.24L35.327 0H28.652L26.569 6.406H10.4375C8.354 6.406 6.271 7.297 4.7685 9.351C3.7775 10.707 3.167 12.531 3.167 14.108C3.167 16.455 4.8545 17.702 8.484 17.702H14.266C14.6835 17.702 14.971 18.1325 14.8625 18.4705C14.195 20.5275 12.572 20.529 12.279 20.529H1.456L0 25H12.455C16.8195 25 18.985 23.752 20.304 21.1125C21.0015 19.6465 21.4405 18.2525 21.4405 16.934C21.4405 14.841 20.0475 13.6305 16.6 13.6305Z"
            fill="white"
          />
        </Svg>
      </View>
      <View style={styles.nav}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <Path
            d="M2.81451 7H22.8145"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <Path
            d="M2.81451 17H22.8145"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 344.815,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  logo: {
    width: 56.814,
    height: 25,
    flexShrink: 0,
  },
  arrowLeft: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  nav: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
});

export default Navbar;
