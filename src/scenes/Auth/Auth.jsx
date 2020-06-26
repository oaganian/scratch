import React from "react";
import { Switch, Route } from "react-router-dom";

/**@DESC scenes */
import Login from "./scenes/Login";
import Register from "./scenes/Register";

/**@DESC componnets */
import Logo from "../../components/Logo";

/**@DESC  images*/
import bg from "./images/bg.png";
import innerBg from "./images/innerBg.png";

/**@DESC mui*/
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

/**@DESC styles */
const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${bg}) no-repeat center top/cover`,
    height: "100vh",
    position: "relative",
    zIndex: 0,
  },
  paper: {
    maxWidth: "910px",
    position: "absolute",
    maxHeight: "500px",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    margin: "auto",
    zIndex: 999,
    background: `#ffffff url(${innerBg}) no-repeat center top/cover`,
  },
  logo: {
    marginTop: "50%",
    marginLeft: "35%",
  },
  right: {
    padding: "50px 60px",
  },
}));

const Auth = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container>
          <Grid item md={6}>
            <Box component="p" className={classes.logo}>
              <Logo />
            </Box>
          </Grid>
          <Grid md={6} className={classes.right}>
            {/* <Login /> */}
            <Register />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Auth;
