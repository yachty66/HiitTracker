import React, { useState, Button } from "react";
import { View, StyleSheet , Text, Pressable, TouchableOpacity, Image} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Test = () => {

  return (
    <View style={[styles.container, {}]}>
      <View style={[styles.settings]}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image
            style={{ width: 50, height: 50, marginTop: 15 }}
            source={require("../assets/settings.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.configViewPicker]}>
        <Text style={{ fontSize: 30 }}>Hallo das ist ein test</Text>
      <Picker
      style={{height: 50, width: 100, justifyContent: "center" }}>
        <Picker.Item label = "red" value="0"></Picker.Item>
        <Picker.Item label = "red" value="0"></Picker.Item>
        <Picker.Item label = "red" value="0"></Picker.Item> 
        <Picker.Item label = "red" value="0"></Picker.Item>
        <Picker.Item label = "red" value="0"></Picker.Item>
        <Picker.Item label = "red" value="0"></Picker.Item>      
      </Picker>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>High Intensity ssIntervals</Text>
        <Pressable style={styles.button}>
          <Text>30 sec</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>High Intensity ssIntervals</Text>
        <Pressable style={styles.button}>
          <Text>30 sec</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>High Intensity ssIntervals</Text>
        <Pressable style={styles.button}>
          <Text>30 sec</Text>
        </Pressable>
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
  },

  configViewPicker: {
    backgroundColor: "yellow",
    flex: 3,
    alignItems: "center",


  },

  configView: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },

  settings: {
    backgroundColor: "red",
    flex: 1.5,
    justifyContent: "center",
  },

})

export default Test;
