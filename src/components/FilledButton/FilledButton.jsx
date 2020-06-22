import React from "react";

/**@DESC mui styles */
import { makeStyles } from "@material-ui/core/styles";

/**@DESC mui components */
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #30BE76 30%, #30BE76 90%)",
    width: "100%",
    height: 50,
    borderRadius: 5,
    boxShadow: "0px 6px 20px rgba(13, 51, 32, 0.1)",
  },
  label: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default function FilledButton(props) {
  const classes = useStyles();

  const { text } = props;
  return (
    <Button
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {text}
    </Button>
  );
}
