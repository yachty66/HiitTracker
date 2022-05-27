import React, { useState, useContext } from "react";
import { Renderer } from "./Renderer";

export const RendererProvider = ({children}) => {
    const stateTuple = useState(false);
    return <Renderer.Provider value={stateTuple}>{children}</Renderer.Provider>;
  }
  