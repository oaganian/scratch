import React from "react";
import { Link } from "react-router-dom";
/**@DESC components  */
import FilledButton from "../../../../components/FilledButton";

/**@DESC mui*/
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
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

const Login = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.welcomeText}>WelCome Back!</Typography>
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
    </React.Fragment>
  );
};

export default Login;
