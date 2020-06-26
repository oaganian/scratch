import React from "react";

/**@mui */
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

/**@components */
import Personality from "./components/Personality";
import ProfileNav from "./components/ProfileNav";
import RecipesList from "./components/RecipesList";

const useStyles = makeStyles({
  root: {
    background: "#F2F2F2",
  },
});
const MyProfile = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item container>
        <header>HEADER</header>
      </Grid>
      <Grid item container>
        <Grid item md={1} />
        <Grid item container md={10} spacing={3}>
          <Grid item lg={3} md={4} sm={5}>
            <Personality />
            <ProfileNav />
          </Grid>
          <Grid item lg={9} md={8} sm={7}>
            <RecipesList />
          </Grid>
        </Grid>
        <Grid item md={1} />
      </Grid>
    </Grid>
  );
};

export default MyProfile;
