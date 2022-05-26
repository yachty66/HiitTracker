import { StyleSheet, Text, View, useState} from "react-native";

import LandingPage from "./Pages/LandingPage";
import PageDelayConfigured from "./Pages/PageDelayConfigured";
import PageBreakConfigured from "./Pages/PageBreakConfigured";
import PageIntervalStarts from "./Pages/PageIntervalStarts";
import StatsFirstPage from "./Pages/StatsFirstPage";
import { NavigationContainer } from '@react-navigation/native';
import MyStack from "./Pages/MyStack";
import { RoundContext } from "./Contexts/RoundContext";
import { RoundContextProvider } from "./Contexts/RountContextProvider";
import { DelayContextProvider } from "./Contexts/DelayContextProvider";
import Test from "./Pages/Test"

/*const App = () => {
  return <MyStack/>
};*/

export default function App() {
  
 //return <DelayContextProvider><RoundContextProvider><MyStack/></RoundContextProvider></DelayContextProvider>
 return <PageIntervalStarts/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});




