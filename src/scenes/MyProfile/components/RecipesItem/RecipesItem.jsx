import React from "react";

/**@mui */
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";

/**@styles */
const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    borderRadius: "8px",
  },
  media: {
    width: "100%",
    minHeight: "220px",
  },
  content: {
    padding: "17px 22.37px 15px 22.37px",
  },
  title: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "32px",
    color: "#030F09",
    marginBottom: "11px",
  },
  contentBottom: {},
  info: {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#606060",
    marginTop: 2,
  },
  dot: {
    color: "#979797",
    width: 5,
    margin: "0 10px",
    marginTop: -2,
  },
  link: {
    padding: "4px 3px",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0.4px",
    color: "#30BE76",
    textTransform: "capitalize",
    border: "1px solid #30BE76",
  },
  icon: {
    width: 15,
  },
});

const RecipesItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://dummyimage.com/hd1080"
          title="Some Recipe"
        />
        <CardContent className={classes.content}>
          <Typography variant="h3" component="h3" className={classes.title}>
            Cooked Coconut Mussels
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Box className={classes.contentBottom} display="flex">
              <Typography className={classes.info}> ± 5 mins</Typography>
              <FiberManualRecordIcon className={classes.dot} />
              <Typography className={classes.info}>4 ingredients</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipesItem;
