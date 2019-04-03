import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import TrackList from "./app/components/TrackListScreen";
import AudioPlayer from "./app/components/AudioPlayer";

class App extends Component {
  state = {
    tracks: []
  };
  async fetchAudioTracks() {
    const response = await fetch(
      "https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
    );
    const tracks = await response.json();
    return tracks;
  }
  async componentDidMount() {
    const response = await this.fetchAudioTracks();
    const tracks = response.tracks.map(track => {
      return {
        trackName: track.name,
        previewURL: track.previewURL,
        key: track.name
      };
    });
    this.setState({
      tracks: tracks
    });
  }
  render() {
    return (
      <Router>
        <Scene key="root" tabs tabBarStyle={styles.tabBar}>
          <Scene key="first" title="1" initial hideNavBar>
            <Scene
              key="TrackListScreen"
              title="Track List Screen"
              component={() => <TrackList tracks={this.state.tracks} />}
              initial
            />
            <Scene
              key="AudioPlayer"
              title="AudioPlayer"
              component={AudioPlayer}
            />
          </Scene>
          <Scene key="second" title="2" hideNavBar>
            <Scene
              key="TrackListScreen"
              title="Track List Screen"
              component={TrackList}
              initial
            />
            <Scene
              key="AudioPlayer"
              title="AudioPlayer"
              component={AudioPlayer}
            />
          </Scene>
          <Scene key="third" title="3" hideNavBar>
            <Scene
              key="TrackListScreen"
              title="Track List Screen"
              component={TrackList}
              initial
            />
            <Scene
              key="AudioPlayer"
              title="AudioPlayer"
              component={AudioPlayer}
            />
          </Scene>
          <Scene key="fourth" title="4" hideNavBar>
            <Scene
              key="TrackListScreen"
              title="Track List Screen"
              component={TrackList}
              initial
            />
            <Scene
              key="AudioPlayer"
              title="AudioPlayer"
              component={AudioPlayer}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#61DAFB"
  }
});

export default App;
