import React from "react";
import { StyleSheet } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import TrackList from "./app/components/TrackListScreen";
import AudioPlayer from "./app/components/AudioPlayer";

const App = () => {
  return (
    <Router>
      <Scene key="root" tabs tabBarStyle={styles.tabBar}>
        <Scene key="first" title="1" initial hideNavBar>
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
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white"
  }
});

export default App;
