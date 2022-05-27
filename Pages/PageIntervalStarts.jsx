import React, { useState, useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { IntervalContext } from "../Contexts/IntervalContext";
import { CurrentRoundContext } from "../Contexts/CurrentRoundContext";
import { RoundContext } from "../Contexts/RoundContext";
import CountDown from "react-native-countdown-component";
import { Renderer } from "../Contexts/Renderer";

import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Button,
  Alert,
} from "react-native";
import PageBreakConfigured from "./PageBreakConfigured";

const PageIntervalStarts = ({ navigation }) => {
  const [selectedValueInterval, setSelectedValueInterval] =
    useContext(IntervalContext);
  const [currentValueRound, setCurrentValueRound] =
    useContext(CurrentRoundContext);
  const [selectedValueRound, setSelectedValueRound] = useContext(RoundContext);
  const [rerender, setRerender] = useContext(Renderer);

  const StartButton = () => {
    return <FontAwesome name="stop" size={100} color="black" />;
  };

  const StopButton = () => {
    return <AntDesign name="caretright" size={100} color="black" />;
  };

  const [status, setStatus] = useState(3);

  return (
    <View style={[styles.container, {}]}>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Round</Text>
        <Pressable style={styles.button}>
          <Text style={styles.someText}>
            {currentValueRound} / {parseInt(selectedValueRound) + 1}
          </Text>
        </Pressable>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          High Intensity Interval
        </Text>
        <Pressable style={styles.button}>
          <CountDown
            size={40}
            id={Math.random()}
            until={parseInt(selectedValueInterval) + 1}
            digitStyle={{
              backgroundColor: "#04D100",
            }}
            timeToShow={["S"]}
            running={status}
            timeLabels={{ m: null, s: null }}
            onFinish={() => {
              navigation.navigate("PageFourBreak");
              setRerender(rerender + 1);
            }}
          />
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

  someText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default PageIntervalStarts;
