import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import GymInfoCard from "./GymInfoCard";
import { getDayName } from "../../helpers/helpers";

const API_BASE_URL =
  "https://stc.brpsystems.com/brponline/api/ver3/businessunits";

const GymInfoList = ({ gym }) => {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentDate = new Date();
  const nextWeekDate = new Date(
    currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
  );

  const formattedTodaysDate = encodeURIComponent(currentDate.toISOString());
  const formattedNextWeekDate = encodeURIComponent(nextWeekDate.toISOString());

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const resp = await fetch(
          `${API_BASE_URL}/${gym.id}/groupactivities?period.start=${formattedTodaysDate}&period.end=${formattedNextWeekDate}`
        );
        const json = await resp.json();
        console.log("TRÄANINGAR", json);

        const grouped = json.reduce((acc, session) => {
          const day = getDayName(session.duration.start);
          if (!acc[day]) {
            acc[day] = [];
          }
          acc[day].push(session);
          return acc;
        }, {});

        setSessions(grouped);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchSessions();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.sessionsBlock}>
      <Text style={styles.blockHeader}>{item}</Text>
      <View style={styles.blockList}>
        {sessions[item].map((session) => (
          <GymInfoCard session={session} key={session.id} />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={Object.keys(sessions)}
        keyExtractor={(day) => day}
        renderItem={renderItem}
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
  blockHeader: {
    alignSelf: "stretch",
    color: "#171515",
    fontFamily: "WorkSans",
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 56,
  },
  sessionsBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  blockList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
  },
};

export default GymInfoList;
