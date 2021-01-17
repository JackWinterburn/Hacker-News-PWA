import React from "react";
import ApiViewer from "./components/ApiViewer";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ApiViewer />
      </div>
    </ChakraProvider>
  );
}

export default App;
