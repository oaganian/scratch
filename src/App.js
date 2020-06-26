import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**@DESC mui*/
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

/**@DESC pages*/
import Root from "./scenes/Root";
import Auth from "./scenes/Auth";
import Register from "./scenes/Auth/scenes/Register";
import MyProfile from "./scenes/MyProfile";

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
        <Route exact path="/profile" component={MyProfile} />
        <Route exact path="/" component={Root} />
        <Route exact path="/auth" component={Auth} />
        <Route path="*" component={() => <h1>404 Not Found!</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
