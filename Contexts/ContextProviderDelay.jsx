import React, { useState } from "react";
import { DelayContext } from "./DelayContext";
export const DelayContextProvider = ({children}) => {
    const stateTuple = useState(false);
    return <DelayContext.Provider value={stateTuple}>{children}</DelayContext.Provider>;
  }