// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "./src/utils/globals.css"

import React from "react"
import { StoreContextProvider } from "./src/context/StoreContext"
export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
)