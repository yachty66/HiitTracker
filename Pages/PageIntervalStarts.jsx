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

const PageIntervalStarts = () => {
  const StartButton = () => {
    return <FontAwesome name="stop" size={100} color="black" />;
  };

  const StopButton = () => {
    return <AntDesign name="caretright" size={100} color="black" />;
  };

  const [status, setStatus] = useState(false);

  return (
    <View style={[styles.container, {}]}>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Round</Text>
        <Pressable style={styles.button}>
          <Text>1/20</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          High Intensity Interval
        </Text>
        <Pressable style={styles.button}>
          <Text>10 sec</Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
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
    backgroundColor: "#04D100",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },

  button: {
    fontSize: 40,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    width: 120,
    height: 120,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#04D100",
  },
});

export default PageIntervalStarts;
