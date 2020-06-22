import React from "react";
import { Link } from "react-router-dom";

/**@DESC componnets */
import Logo from "../../components/Logo";
import FilledButton from "../../components/FilledButton";

/**@DESC  images*/
import bg from "./images/bg.png";
import innerBg from "./images/innerBg.png";

/**@DESC mui*/
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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

  welcomeText: {
    //fontFamily: Nunito
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    align: "center",
    verticalAlign: "top",
    color: "#030F09",
    marginBottom: "8px",
    letterSpacing: 0.7,
  },
  loginText: {
    //fontFamily: Nunito;
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#606060",
    letterSpacing: 0.7,
    marginBottom: "60px",
  },
  emailField: {
    marginBottom: "37px",
    width: "100%",
  },
  passwordField: {
    width: "100%",
    marginBottom: "40px",
  },
  loginBtn: {
    width: "100%",
    marginBottom: "30px",
  },
  register: {
    textAlign: "center",
  },
  registerText: {
    color: "#A8A8A8",
    //fontFamily: "Nunito"
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHight: "22px",
    marginBottom: "3px",
  },
  registerLink: {
    color: "#30BE76",
    //fontFamily: Nunito;
    fontWeight: "bold",
    fontSize: "16px",
    lineGeight: "22px",
    letterSpacing: "0.32px",
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
            <Typography className={classes.welcomeText}>
              WelCome Back!
            </Typography>
            <Typography className={classes.loginText}>
              Please login to continue.
            </Typography>
            <form>
              <Box>
                <TextField
                  id="standard-basic"
                  label="Email address"
                  className={classes.emailField}
                />
              </Box>
              <Box>
                <TextField
                  id="standard-basic"
                  label="Password"
                  className={classes.passwordField}
                />
              </Box>
              <Box className={classes.loginBtn}>
                <FilledButton text={"Login"} />
              </Box>
            </form>
            <Box component={"p"} className={classes.register}>
              <Typography className={classes.registerText}>
                New to Scratch?
              </Typography>
              <Link to="auth/register">
                <Typography className={classes.registerLink}>
                  Create Account Here
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Auth;
