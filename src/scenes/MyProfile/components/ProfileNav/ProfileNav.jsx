import React from "react";

/**@mui */
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles({
  root: {
    borderRadius: "8px",
    padding: "25px",
    boxShadow: "none",
  },
  list: {
    padding: 0,
  },
  item: {
    padding: 0,
    marginBottom: "26px",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  text: {
    color: "#030F09",
    fontSize: "16px",
    lineHeight: "22px",
  },
  iconContainer: {
    minWidth: 0,
    marginRight: "15px",
  },
});

const ProfileNav = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList className={classes.list}>
        <MenuItem className={classes.item}>
          <ListItemIcon className={classes.iconContainer}>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" className={classes.text}>
            Edit Profile
          </Typography>
        </MenuItem>
        <MenuItem className={classes.item}>
          <ListItemIcon className={classes.iconContainer}>
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" className={classes.text}>
            Settings
          </Typography>
        </MenuItem>
        <MenuItem className={classes.item}>
          <ListItemIcon className={classes.iconContainer}>
            <ExitToAppOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" className={classes.text}>
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default ProfileNav;
