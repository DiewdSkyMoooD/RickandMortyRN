import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Person = (props) => {
  return (
    <View style={styles.person}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={[styles.person_img, styles[props.status]]}
          source={{ uri: props.image }}
        />
        <Text style={styles.status}>{props.status}</Text>
      </View>
      <Text style={styles.name}>
        {props.name}
        {props.id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: "white",
    fontSize: 20,
    marginLeft: 12,
  },
  person: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  person_img: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 3,
  },
  Alive: {
    borderColor: "green",
  },
  Dead: {
    borderColor: "red",
  },
  unknown: {
    borderColor: "gray",
  },
  status: {
    color: "white",
    fontWeight: 900,
  },
});

export default Person;
