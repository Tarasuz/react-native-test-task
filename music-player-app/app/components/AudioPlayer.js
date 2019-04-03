import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

const AudioPlayer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} onPress={() => Actions.TrackListScreen()}>audio player</Text>
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

export default AudioPlayer;