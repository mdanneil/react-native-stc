import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getHours } from "../../helpers/helpers";

const GymInfoCard = ({ session }) => {
  console.log("seshh", session);
  const instructorName =
    session.instructors && session.instructors[0]
      ? session.instructors[0].name
      : "Virtual";
  return (
    <View style={styles.container}>
      <Text style={styles.remaining}>
        {session.slots.totalBookable} places remaining
      </Text>
      <Text style={styles.sessionName}>
        {session.groupActivityProduct.name}
      </Text>
      <View style={styles.row}>
        <Text style={styles.sessionInfo}>
          {getHours(session.duration.start)}
        </Text>
        <Text style={styles.sessionInfo}>{instructorName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 136,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
  },
  remaining: {
    color: "#3CBFAE",
    fontFamily: "WorkSans",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 19.6,
  },
  sessionName: {
    color: "#171515",
    fontFamily: "WorkSans",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 33.6,
  },
  sessionInfo: {
    color: "#171515",
    fontFamily: "WorkSans",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 19.6,
  },
  row: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 16,
    flexDirection: "row",
  },
});

export default GymInfoCard;
