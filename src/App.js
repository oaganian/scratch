import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**@DESC mui*/
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

/**@DESC pages*/
import Auth from "./scenes/Auth";
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
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
};

export default App;
