import React, { useState, useContext } from "react";
import { CurrentRoundContext } from "./CurrentRoundContext";

export const CurrentRoundContextProvider = ({children}) => {
    const stateTuple = useState(1);
    return <CurrentRoundContext.Provider value={stateTuple}>{children}</CurrentRoundContext.Provider>;
  }
  