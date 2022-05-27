import React, { useState, useContext } from "react";
import { IntervalContext } from "./IntervalContext";

export const IntervalContextProvider = ({children}) => {
    const stateTuple = useState(false);
    return <IntervalContext.Provider value={stateTuple}>{children}</IntervalContext.Provider>;
  }
  