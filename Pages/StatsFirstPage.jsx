import React from "react";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

const StatsFirstPage = () => {
  return (
    <View style={[styles.container, {}]}>
      <View style={[styles.blackColorFill]}>
        <View style={[styles.configView]}>
          <Text style={{ fontSize: 30, color: "white" }}>Inspect runs</Text>
        </View>
        <View style={[styles.configView]}>
          <Text style={{ fontSize: 30, color: "white" }}>
            High Intensity Intervals
          </Text>
        </View>
        <View style={[styles.configViewLastItem]}>
          <Text style={{ fontSize: 30, color: "white" }}>Delay till start</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    margin: 0,
    padding: 0,
    backgroundColor: "black",
  },

  configView: {
    borderTopWidth: 1,
    borderTopColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    backgroundColor: "black",
  },

  configViewLastItem: {
    borderTopWidth: 1,
    borderTopColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    backgroundColor: "black",
  },

  blackColorFill: {
    flex: 0.5,
    backgroundColor: "black",
  },
});

export default StatsFirstPage;
