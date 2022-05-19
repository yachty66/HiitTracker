
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StatsFirstPage from "./StatsFirstPage";
import PageDelayConfigured from "./PageDelayConfigured";
import React, { useContext, useState } from "react";
import LandingPage from "./LandingPage";
import { RoundContext } from "../Contexts/RoundContext";

const Stack = createNativeStackNavigator();

const MyStack = () => {


  //const {selectedValueRound, setSelectedValueRound} = useContext(RoundContext);

  const [selectedValueRound, setSelectedValueRound] = useState("10 rounds");


  return (
    <RoundContext.Provider value={[selectedValueRound, setSelectedValueRound]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LandingPage}
            options={{
              headerShown: false,
              title: "",
            }}
          />
          <Stack.Screen
            name="Settings"
            component={StatsFirstPage}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="PageTwoDelay"
            component={PageDelayConfigured}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "red",
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RoundContext.Provider>
  );
  
};

export default MyStack;
