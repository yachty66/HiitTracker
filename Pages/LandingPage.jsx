import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

const log = () => {
  console.log(selectedValueRound)
}

const LandingPage = ({ navigation }) => {
  const [selectedValueRound, setSelectedValueRound] = useState("10 rounds");
  const [selectedValueInterval, setSelectedValueInterval] = useState("30 sec");
  const [selectedValueDelay, setSelectedValueDelay] = useState("10 sec");
  
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
          selectedValue={selectedValueRound}
          style={{
            height: 50,
            width: 200,
            justifyContent: "center",
            borderColor: "black",
            borderWidth: 2,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValueRound(itemValue)

          }
          
          itemStyle={{ height: 44 }}
        >
          <Picker.Item label="1 round" value="0"></Picker.Item>
          <Picker.Item label="2 rounds" value="1"></Picker.Item>
          <Picker.Item label="3 rounds" value="2"></Picker.Item>
          <Picker.Item label="4 rounds" value="3"></Picker.Item>
          <Picker.Item label="5 rounds" value="4"></Picker.Item>
          <Picker.Item label="6 rounds" value="5"></Picker.Item>
          <Picker.Item label="7 rounds" value="6"></Picker.Item>
          <Picker.Item label="8 rounds" value="7"></Picker.Item>
          <Picker.Item label="9 rounds" value="8"></Picker.Item>
          <Picker.Item label="10 rounds" value="9"></Picker.Item>
          <Picker.Item label="11 rounds" value="10"></Picker.Item>
          <Picker.Item label="12 rounds" value="11"></Picker.Item>
          <Picker.Item label="13 rounds" value="12"></Picker.Item>
          <Picker.Item label="14 rounds" value="13"></Picker.Item>
          <Picker.Item label="15 rounds" value="14"></Picker.Item>
          <Picker.Item label="16 rounds" value="15"></Picker.Item>
          <Picker.Item label="17 rounds" value="16"></Picker.Item>
          <Picker.Item label="18 rounds" value="17"></Picker.Item>
          <Picker.Item label="19 rounds" value="18"></Picker.Item>
          <Picker.Item label="20 rounds" value="19"></Picker.Item>
          <Picker.Item label="21 rounds" value="20"></Picker.Item>
          <Picker.Item label="22 rounds" value="21"></Picker.Item>
          <Picker.Item label="23 rounds" value="22"></Picker.Item>
          <Picker.Item label="24 rounds" value="23"></Picker.Item>
          <Picker.Item label="25 rounds" value="24"></Picker.Item>
          <Picker.Item label="26 rounds" value="25"></Picker.Item>
          <Picker.Item label="27 rounds" value="26"></Picker.Item>
          <Picker.Item label="28 rounds" value="27"></Picker.Item>
          <Picker.Item label="29 rounds" value="28"></Picker.Item>
          <Picker.Item label="30 rounds" value="29"></Picker.Item>
          <Picker.Item label="31 rounds" value="30"></Picker.Item>
          <Picker.Item label="32 rounds" value="31"></Picker.Item>
          <Picker.Item label="33 rounds" value="32"></Picker.Item>
          <Picker.Item label="34 rounds" value="33"></Picker.Item>
          <Picker.Item label="36 rounds" value="34"></Picker.Item>
          <Picker.Item label="36 rounds" value="35"></Picker.Item>
          <Picker.Item label="37 rounds" value="36"></Picker.Item>
          <Picker.Item label="38 rounds" value="37"></Picker.Item>
          <Picker.Item label="39 rounds" value="38"></Picker.Item>
          <Picker.Item label="40 rounds" value="39"></Picker.Item>
          <Picker.Item label="41 rounds" value="40"></Picker.Item>
          <Picker.Item label="42 rounds" value="41"></Picker.Item>
          <Picker.Item label="43 rounds" value="42"></Picker.Item>
          <Picker.Item label="44 rounds" value="43"></Picker.Item>
          <Picker.Item label="45 rounds" value="44"></Picker.Item>
          <Picker.Item label="46 rounds" value="45"></Picker.Item>
          <Picker.Item label="47 rounds" value="46"></Picker.Item>
          <Picker.Item label="48 rounds" value="47"></Picker.Item>
          <Picker.Item label="49 rounds" value="48"></Picker.Item>
          <Picker.Item label="50 rounds" value="49"></Picker.Item>
        </Picker>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>High Intensity Intervals</Text>
        <Picker
          selectedValue={selectedValueInterval}
          style={{
            height: 50,
            width: 200,
            justifyContent: "center",
            borderColor: "black",
            borderWidth: 2,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValueInterval(itemValue)
          }
          itemStyle={{ height: 44 }}
        >
          <Picker.Item label="1 sec" value="0Two"></Picker.Item>
          <Picker.Item label="2 sec" value="1Two"></Picker.Item>
          <Picker.Item label="3 sec" value="2Two"></Picker.Item>
          <Picker.Item label="4 sec" value="3Two"></Picker.Item>
          <Picker.Item label="5 sec" value="4Two"></Picker.Item>
          <Picker.Item label="6 sec" value="5Two"></Picker.Item>
          <Picker.Item label="7 sec" value="6Two"></Picker.Item>
          <Picker.Item label="9 sec" value="7Two"></Picker.Item>
          <Picker.Item label="8 sec" value="8Two"></Picker.Item>
          <Picker.Item label="10 sec" value="9Two"></Picker.Item>
          <Picker.Item label="11 sec" value="10Two"></Picker.Item>
          <Picker.Item label="12 sec" value="11Two"></Picker.Item>
          <Picker.Item label="13 sec" value="12Two"></Picker.Item>
          <Picker.Item label="14 sec" value="13Two"></Picker.Item>
          <Picker.Item label="15 sec" value="14Two"></Picker.Item>
          <Picker.Item label="16 sec" value="15Two"></Picker.Item>
          <Picker.Item label="17 sec" value="16Two"></Picker.Item>
          <Picker.Item label="18 sec" value="17Two"></Picker.Item>
          <Picker.Item label="19 sec" value="18Two"></Picker.Item>
          <Picker.Item label="20 sec" value="19Two"></Picker.Item>
          <Picker.Item label="21 sec" value="20Two"></Picker.Item>
          <Picker.Item label="22 sec" value="21Two"></Picker.Item>
          <Picker.Item label="23 sec" value="22Two"></Picker.Item>
          <Picker.Item label="24 sec" value="23Two"></Picker.Item>
          <Picker.Item label="25 sec" value="24Two"></Picker.Item>
          <Picker.Item label="26 sec" value="25Two"></Picker.Item>
          <Picker.Item label="27 sec" value="26Two"></Picker.Item>
          <Picker.Item label="28 sec" value="27Two"></Picker.Item>
          <Picker.Item label="29 sec" value="28Two"></Picker.Item>
          <Picker.Item label="30 sec" value="29Two"></Picker.Item>
          <Picker.Item label="31 sec" value="30Two"></Picker.Item>
          <Picker.Item label="32 sec" value="31Two"></Picker.Item>
          <Picker.Item label="33 sec" value="32Two"></Picker.Item>
          <Picker.Item label="34 sec" value="33Two"></Picker.Item>
          <Picker.Item label="36 sec" value="34Two"></Picker.Item>
          <Picker.Item label="36 sec" value="35Two"></Picker.Item>
          <Picker.Item label="37 sec" value="36Two"></Picker.Item>
          <Picker.Item label="38 sec" value="37Two"></Picker.Item>
          <Picker.Item label="39 sec" value="38Two"></Picker.Item>
          <Picker.Item label="40 sec" value="39Two"></Picker.Item>
          <Picker.Item label="41 sec" value="40Two"></Picker.Item>
          <Picker.Item label="42 sec" value="41Two"></Picker.Item>
          <Picker.Item label="43 sec" value="42Two"></Picker.Item>
          <Picker.Item label="44 sec" value="43Two"></Picker.Item>
          <Picker.Item label="45 sec" value="44Two"></Picker.Item>
          <Picker.Item label="46 sec" value="45Two"></Picker.Item>
          <Picker.Item label="47 sec" value="46Two"></Picker.Item>
          <Picker.Item label="48 sec" value="47Two"></Picker.Item>
          <Picker.Item label="49 sec" value="48Two"></Picker.Item>
          <Picker.Item label="50 sec" value="49Two"></Picker.Item>
          <Picker.Item label="51 sec" value="50Two"></Picker.Item>
          <Picker.Item label="52 sec" value="51Two"></Picker.Item>
          <Picker.Item label="53 sec" value="52Two"></Picker.Item>
          <Picker.Item label="54 sec" value="53Two"></Picker.Item>
          <Picker.Item label="55 sec" value="54Two"></Picker.Item>
          <Picker.Item label="56 sec" value="55Two"></Picker.Item>
          <Picker.Item label="57 sec" value="56Two"></Picker.Item>
          <Picker.Item label="58 sec" value="57Two"></Picker.Item>
          <Picker.Item label="59 sec" value="58Two"></Picker.Item>
          <Picker.Item label="1 min" value="59Two"></Picker.Item>
        </Picker>
      </View>
      <View style={[styles.configView]}>
        <Text style={{ fontSize: 30 }}>Delay till start</Text>
        <Picker
          selectedValue={selectedValueDelay}
          style={{
            height: 50,
            width: 200,
            justifyContent: "center",
            borderColor: "black",
            borderWidth: 2,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValueDelay(itemValue)
          }
          itemStyle={{ height: 44 }}
        >
          <Picker.Item label="1 sec" value="0Three"></Picker.Item>
          <Picker.Item label="2 sec" value="1Three"></Picker.Item>
          <Picker.Item label="3 sec" value="2Three"></Picker.Item>
          <Picker.Item label="4 sec" value="3Three"></Picker.Item>
          <Picker.Item label="5 sec" value="4Three"></Picker.Item>
          <Picker.Item label="6 sec" value="5Three"></Picker.Item>
          <Picker.Item label="7 sec" value="6Three"></Picker.Item>
          <Picker.Item label="9 sec" value="7Three"></Picker.Item>
          <Picker.Item label="8 sec" value="8Three"></Picker.Item>
          <Picker.Item label="10 sec" value="9Three"></Picker.Item>
          <Picker.Item label="11 sec" value="10Three"></Picker.Item>
          <Picker.Item label="12 sec" value="11Three"></Picker.Item>
          <Picker.Item label="13 sec" value="12Three"></Picker.Item>
          <Picker.Item label="14 sec" value="13Three"></Picker.Item>
          <Picker.Item label="15 sec" value="14Three"></Picker.Item>
          <Picker.Item label="16 sec" value="15Three"></Picker.Item>
          <Picker.Item label="17 sec" value="16Three"></Picker.Item>
          <Picker.Item label="18 sec" value="17Three"></Picker.Item>
          <Picker.Item label="19 sec" value="18Three"></Picker.Item>
          <Picker.Item label="20 sec" value="19Three"></Picker.Item>
          <Picker.Item label="21 sec" value="20Three"></Picker.Item>
          <Picker.Item label="22 sec" value="21Three"></Picker.Item>
          <Picker.Item label="23 sec" value="22Three"></Picker.Item>
          <Picker.Item label="24 sec" value="23Three"></Picker.Item>
          <Picker.Item label="25 sec" value="24Three"></Picker.Item>
          <Picker.Item label="26 sec" value="25Three"></Picker.Item>
          <Picker.Item label="27 sec" value="26Three"></Picker.Item>
          <Picker.Item label="28 sec" value="27Three"></Picker.Item>
          <Picker.Item label="29 sec" value="28Three"></Picker.Item>
          <Picker.Item label="30 sec" value="29Three"></Picker.Item>
          <Picker.Item label="31 sec" value="30Three"></Picker.Item>
          <Picker.Item label="32 sec" value="31Three"></Picker.Item>
          <Picker.Item label="33 sec" value="32Three"></Picker.Item>
          <Picker.Item label="34 sec" value="33Three"></Picker.Item>
          <Picker.Item label="36 sec" value="34Three"></Picker.Item>
          <Picker.Item label="36 sec" value="35Three"></Picker.Item>
          <Picker.Item label="37 sec" value="36Three"></Picker.Item>
          <Picker.Item label="38 sec" value="37Three"></Picker.Item>
          <Picker.Item label="39 sec" value="38Three"></Picker.Item>
          <Picker.Item label="40 sec" value="39Three"></Picker.Item>
          <Picker.Item label="41 sec" value="40Three"></Picker.Item>
          <Picker.Item label="42 sec" value="41Three"></Picker.Item>
          <Picker.Item label="43 sec" value="42Three"></Picker.Item>
          <Picker.Item label="44 sec" value="43Three"></Picker.Item>
          <Picker.Item label="45 sec" value="44Three"></Picker.Item>
          <Picker.Item label="46 sec" value="45Three"></Picker.Item>
          <Picker.Item label="47 sec" value="46Three"></Picker.Item>
          <Picker.Item label="48 sec" value="47Three"></Picker.Item>
          <Picker.Item label="49 sec" value="48Three"></Picker.Item>
          <Picker.Item label="50 sec" value="49Three"></Picker.Item>
          <Picker.Item label="51 sec" value="50Three"></Picker.Item>
          <Picker.Item label="52 sec" value="51Three"></Picker.Item>
          <Picker.Item label="53 sec" value="52Three"></Picker.Item>
          <Picker.Item label="54 sec" value="53Three"></Picker.Item>
          <Picker.Item label="55 sec" value="54Three"></Picker.Item>
          <Picker.Item label="56 sec" value="55Three"></Picker.Item>
          <Picker.Item label="57 sec" value="56Three"></Picker.Item>
          <Picker.Item label="58 sec" value="57Three"></Picker.Item>
          <Picker.Item label="59 sec" value="58Three"></Picker.Item>
          <Picker.Item label="1 min" value="59Three"></Picker.Item>
        </Picker>
      </View>
      <View style={[styles.configView]}>
        <Pressable style={styles.startButton} onPress={() => navigation.navigate("PageTwoDelay")}>
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
    flex: 3,
    alignItems: "center",
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
