import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, View } from "react-native";
import Card from "./HomeCard";
import { Club } from "../../Types/Club";

const HomeList = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigation = useNavigation<any>();

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
    <View style={styles.listContainer as any}>
      <FlatList
        data={clubs}
        keyExtractor={(club) => club.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            aria-label={item.name}
            onPress={() => navigation.navigate("GymInfo", item)}
          >
            <Card name={item.name.replace(/^STC /, "")} />
          </Pressable>
        )}
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
