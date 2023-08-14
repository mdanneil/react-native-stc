import { WorkSans_700Bold } from "@expo-google-fonts/work-sans";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import GymInfo from "./ui/GymInfo/GymInfo";
import Home from "./ui/Home/Home";

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
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GymInfo" component={GymInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
