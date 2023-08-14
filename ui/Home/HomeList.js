import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Card from "./HomeCard";
import { useNavigation } from "@react-navigation/native";

const HomeList = () => {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://stc.brpsystems.com/brponline/api/ver3/businessunits")
      .then((resp) => resp.json())
      .then((json) => setClubs(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={clubs}
        keyExtractor={(club) => club.id}
        renderItem={({ item }) => (
          <Pressable
            aria-label={item.name}
            onPress={() => navigation.navigate("GymInfo", item)}
          >
            <Card name={item.name} />
          </Pressable>
        )}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = {
  listContainer: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
};

export default HomeList;
