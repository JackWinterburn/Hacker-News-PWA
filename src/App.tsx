import React from "react";
import ApiViewer from "./components/ApiViewer";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <ApiViewer />
            </Route>
            <Route path="/comments/:id">
              <Comments />
            </Route>
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
