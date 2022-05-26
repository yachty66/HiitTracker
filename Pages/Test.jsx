import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import CountDown from 'react-native-countdown-component'; 


const Test = () => {

    /**const [time, setTime] = useState(false);

  var timeleft = 10;
  const timer = () => {
    var dcrownloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        //load new site
        console.log("load new site");
      }
      timeleft -= 1;
      setTime(timeleft);
    }, 1000);
  };*/ 
  //const [time, setTime] = useState("sss");

  // Declare a new state variable, which we'll call "count"

  return(
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text><CountDown size={20} until={0.5} onFinish={() => alert('Finished')} digitStyle={{backgroundColor: '#FFF', borderWidth: 0, borderColor: '#1CC625'}} digitTxtStyle={{color: 'black'}} timeLabelStyle={{color: 'red', fontWeight: 'bold'}} separatorStyle={{color: '#1CC625'}} timeToShow={['S']} timeLabels={{m: null, s: null}} showSeparator/></Text>
    </View>
  )


  
};

export default Test;
