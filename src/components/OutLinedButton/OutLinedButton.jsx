import React from "react";

/**@DESC mui styles */
import { makeStyles } from "@material-ui/core/styles";

/**@DESC mui components */
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, white 30%, white 90%)",
    width: 239,
    height: 50,
    borderRadius: 7,
    boxShadow: "0px 6px 20px rgba(13, 51, 32, 0.1)",
    border: "2px solid #30BE76",
  },
  label: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#30BE76",
    fontWeight: "bold",
  },
});

export default function OutLinedButton() {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      Learn More
    </Button>
  );
}
