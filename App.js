import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Home from "./ui/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GymInfo from "./ui/GymInfo/GymInfo";
import { useFonts } from "expo-font";
import { WorkSans_700Bold } from "@expo-google-fonts/work-sans";

const Stack = createNativeStackNavigator();

const consoleWarn = console.warn;

console.warn = (message, ...args) => {
  if (
    message.startsWith("accessibilityLabel is deprecated.") ||
    message.startsWith("Image: style.resizeMode is deprecated.") ||
    message.startsWith("Image: style.tintColor is deprecated.")
  ) {
    return;
  }
  consoleWarn(message, ...args);
};

const App = () => {
  const [fontsLoaded] = useFonts({
    WorkSans: WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GymInfo" component={GymInfo} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
