import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//scenes

import Root from "./scenes/Root";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#30BE76",
    },
  },
});

const App = () => {
  return (
    <Router>
      <Root />
    </Router>
  );
};

export default App;
