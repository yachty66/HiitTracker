import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable, Picker } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import StatsFirstPage from "./StatsFirstPage";
import DropDownPicker from "react-native-dropdown-picker";

const LandingPage = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("10 rounds");
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
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>Rounds</Text>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="1 round" value="1round" />
        <Picker.Item label="2 rounds" value="2rounds" />
      </Picker>
        <Pressable style={styles.button}>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>High Intensity ssIntervals</Text>
        <Pressable style={styles.button}>
          <Text>30 sec</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>Delay till start</Text>
        <Pressable style={styles.button}>
          <Text>10 sec</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Pressable style={styles.startButton}>
          <Text style={{ fontSize: 40 }}>START</Text>
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

  configView: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },

  startButton: {
    borderWidth: 2,
    borderColor: "black",
    width: 200,
    height: 100,
    backgroundColor: "#04D100",
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
  },

  settings: {
    backgroundColor: "red",
    flex: 1.5,
    justifyContent: "center",
  },
});

export default LandingPage;
