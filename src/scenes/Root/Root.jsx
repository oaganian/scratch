import React from "react";
import { Link } from "react-router-dom";

import bg from "./images/background.png";

/**@DESC mui styles */
import { makeStyles } from "@material-ui/core/styles";

/**@DESC mui */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

/**@DESC components */
import Logo from "../../components/Logo";
import FilledButton from "../../components/FilledButton";
import OutLinedButton from "../../components/OutLinedButton";

const useStyles = makeStyles({
  root: {
    paddingTop: 61,
    background: `url(${bg}) no-repeat center top/cover`,
  },
  main: {
    border: "3px",
    boxSizing: "border-box",
    height: "100vh",
    marginTop: 92,
    maxWidth: "600px",
  },
  textBig: {
    //fontfamily: Nunito
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 40,
    color: "#030F09",
    lineHeight: "55px",
    letterSpacing: " -0.5px",
    marginBottom: "8px",
  },
  textSmall: {
    color: "#606060",
    //fontFamily: Nunito,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "22px",
    marginBottom: "40px",
  },
  firstBtn: {
    marginRight: "20px",
  },
});

const Root = (params) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} height="100%">
      <Grid item md={1} />
      <Grid container item md={10} spacing={2}>
        <Grid item md={12}>
          <Logo />
        </Grid>
        <Grid item sm={12} className={classes.main}>
          <Typography className={classes.textBig}>
            Join over 50 millions people sharing recipes everyday
          </Typography>

          <Typography className={classes.textSmall}>
            Never run out of ideas again. Try new foods, ingredients, cooking
            style, and more
          </Typography>

          <span className={classes.firstBtn}>
            <Link exact to="/auth">
              <FilledButton />
            </Link>
          </span>
          <span>
            <OutLinedButton />
          </span>
        </Grid>
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default Root;
