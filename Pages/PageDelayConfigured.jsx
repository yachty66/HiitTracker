import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Button,
  Alert,
} from "react-native";

/*const startButton = <FontAwesome name="start" size={100} color="black" />;
  const stopButton = <AntDesign name="caretright" size={100} color="black" />;

  const status = "stop";*/

/*<Pressable onPress={() =>{
          if(status == stopButton){
            console.log("hallo");
            status = <FontAwesome name="start" size={100} color="black" />;
          }
        }}>{status}</Pressable> */

const PageDelayConfigured = () => {
  const StartButton = () => {
    return <FontAwesome name="stop" size={100} color="black" />;
  };

  const StopButton = () => {
    return <AntDesign name="caretright" size={100} color="black" />;
  };

  const [status, setStatus] = useState(false);

  const showConfirmDialog = () => {
    return Alert.alert("Are your sure?", "Are you sure you want to go back?", [
      {
        text: "Yes",
        onPress: () => {
          setShowBox(false);
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <View style={[styles.container, {}]}>
      <View style={[styles.backButton]}>
        <Pressable onPress={() => showConfirmDialog()}>
          <Image
            style={{ width: 30, height: 30, marginTop: 15 }}
            source={require("../assets/backButton.png")}
          ></Image>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>Round</Text>
        <Pressable style={styles.button}>
          <Text>1/20</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>Delay</Text>
        <Pressable style={styles.button}>
          <Text>10 sec</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>
          {status ? <Text>Play</Text> : <Text>Stop</Text>}
        </Text>
        <Pressable
          onPress={() => {
            setStatus(!status);
          }}
        >
          {status ? <StopButton /> : <StartButton />}
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

  backButton: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default PageDelayConfigured;
