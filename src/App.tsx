import React from "react";
import ApiViewer from "./components/ApiViewer";
import { ChakraProvider } from "@chakra-ui/react";
import DarkModeSwitch from "./components/DarkModeSwitch";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <DarkModeSwitch />
      <ApiViewer />
    </ChakraProvider>
  );
}

export default App;
