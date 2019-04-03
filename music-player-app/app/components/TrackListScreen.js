import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

const TrackList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} onPress={() => Actions.AudioPlayer()}>trackList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "blue",
    height: "100%",
    padding: 40
  },
  header: {
    fontSize: 24,
    color: "white"
  }
});

export default TrackList;