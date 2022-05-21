import React, { useState, useContext } from "react";
import { RoundContext } from "./RoundContext";

export const RoundContextProvider = ({children}) => {
    const stateTuple = useState(false);
    return <RoundContext.Provider value={stateTuple}>{children}</RoundContext.Provider>;
  }
  