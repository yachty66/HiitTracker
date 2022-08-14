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
import { IntervalContextProvider } from "./Contexts/IntervalContextProvider";
import { CurrentRoundContextProvider } from "./Contexts/CurrentRoundContextProvider";
import { RendererProvider } from "./Contexts/RendererProvider";
import { Renderer } from "react-dom";

/*const App = () => {
  return <MyStack/>
};*/

export default function App() {
  
return <RendererProvider>
  <CurrentRoundContextProvider><IntervalContextProvider><DelayContextProvider><RoundContextProvider><MyStack/></RoundContextProvider></DelayContextProvider></IntervalContextProvider></CurrentRoundContextProvider></RendererProvider>
 //return <PageBreakConfigured/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});




