import React from "react";
import ApiViewer from "./components/ApiViewer";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <ApiViewer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
