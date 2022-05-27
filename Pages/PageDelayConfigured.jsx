import React, { useContext, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Text, View, StyleSheet, Pressable } from "react-native";
import { RoundContext } from "../Contexts/RoundContext";
import { DelayContext } from "../Contexts/DelayContext";
import { CurrentRoundContext } from "../Contexts/CurrentRoundContext";
import CountDown from "react-native-countdown-component";

const PageDelayConfigured = ({ navigation }) => {
  const StartButton = () => {
    return <FontAwesome name="stop" size={100} color="black" />;
  };

  const StopButton = () => {
    return <AntDesign name="caretright" size={100} color="black" />;
  };

  const [status, setStatus] = useState(3);

  const [selectedValueRound, setSelectedValueRound] = useContext(RoundContext);
  const [selectedValueDelay, setSelectedValueDelay] = useContext(DelayContext);
  const [currentValueRound, setCurrentValueRound] = useContext(CurrentRoundContext);

  return (
    <View style={[styles.container, {}]}>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Round</Text>
        <View style={styles.button}>
          <Text style={styles.someText}>
             {currentValueRound} / {parseInt(selectedValueRound) + 1}
          </Text>
        </View>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Delay</Text>

        <Pressable style={styles.button}>
          <CountDown
            size={40}
            until={parseInt(selectedValueDelay) + 1}
            digitStyle={{
              backgroundColor: "red",
              borderWidth: 0,
              borderColor: "#1CC625",
            }}
            timeToShow={["S"]}
            running={status}
            timeLabels={{ m: null, s: null }}
            onFinish={() => navigation.navigate("PageThreeStart")}
          />
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
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
    backgroundColor: "red",
  },

  someText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default PageDelayConfigured;
