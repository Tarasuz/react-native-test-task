import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";

const TrackList = ({ tracks }) => {
  const atLeastOneTrack = tracks[0];
  return (
    <View style={styles.container}>
      <Text style={styles.header} onPress={() => Actions.AudioPlayer()}>
        Track list
      </Text>
      {atLeastOneTrack ? (
        <FlatList
          style={styles.trackList}
          data={tracks}
          renderItem={track => (
            <TouchableHighlight style={styles.trackListItem}>
              <Text style={styles.trackListItemText}>{track.item.trackName}</Text>
            </TouchableHighlight>
          )}
        />
      ) : (
        <Text>loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30
  },
  header: {
    fontSize: 24,
    color: "black"
  },
  trackList: {
    width: "100%"
  },
  trackListItem: { paddingBottom: 20, paddingTop: 20, width: "100%", borderBottomWidth: 1, borderBottomColor: "black" },
  trackListItemText: {
    color: "black", 
    fontSize: 16
  }
});

export default TrackList;
