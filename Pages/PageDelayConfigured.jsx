import React, { useContext, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import LandingPage from "./LandingPage";
import { RoundContext } from "../Contexts/RoundContext";

import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Button,
  Alert,
} from "react-native";



const PageDelayConfigured = () => {
  const StartButton = () => {
    return <FontAwesome name="stop" size={100} color="black" />;
  };

  const StopButton = () => {
    return <AntDesign name="caretright" size={100} color="black" />;
  };

  const [status, setStatus] = useState(false);
  const [selectedValueRound, setSelectedValueRound] = useContext(RoundContext);
  console.log(useContext(RoundContext))
  return (
    <View style={[styles.container, {}]}>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>Round</Text>
        <View style={styles.button}>
          <Text>{parseInt(selectedValueRound)+1}</Text>
        </View>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>Delay</Text>
        <Pressable style={styles.button}>
          <Text>{parseInt(selectedValueDelay)+1}</Text>
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
