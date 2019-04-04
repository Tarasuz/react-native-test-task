import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";

const TrackList = ({ tracks, onPressTrackListItem }) => {
  const atLeastOneTrack = tracks[0];
  return (
    <View style={styles.container}>
      {atLeastOneTrack ? (
        <FlatList
          style={styles.trackList}
          data={tracks}
          renderItem={({ item }) => {
            const trackName = item.trackName;
            return (
              <TouchableHighlight
                style={styles.trackListItem}
                onPress={(event) => onPressTrackListItem(event, trackName)}
                underlayColor="#61DAFB"
              >
                <Text style={styles.trackListItemText}>{trackName}</Text>
              </TouchableHighlight>
            );
          }}
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
    paddingTop: 30
  },
  header: {
    fontSize: 24,
    color: "black"
  },
  trackList: {
    width: "100%"
  },
  trackListItem: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 15,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  trackListItemText: {
    color: "black",
    fontSize: 16
  }
});

export default TrackList;
