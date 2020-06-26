import React from "react";

/**@mui */
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

/**@components */
import RecipesItem from "../RecipesItem";

/**@styles */
const useStyles = makeStyles({
  root: {
    padding: "25px",
    paddingBottom: "17px",
    borderRadius: "8px",
    boxShadow: "none",
  },
});

const RecipesList = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <RecipesItem />
        </Grid>
        <Grid item lg={6}>
          <RecipesItem />
        </Grid>
        <Grid item lg={6}>
          <RecipesItem />
        </Grid>
        <Grid item lg={6}>
          <RecipesItem />
        </Grid>
        <Grid item lg={6}>
          <RecipesItem />
        </Grid>
        <Grid item lg={6}>
          <RecipesItem />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipesList;
