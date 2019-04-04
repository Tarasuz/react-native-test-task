import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

const DummyComponent = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Dummy component</Text>
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
  }
});

export default DummyComponent;
