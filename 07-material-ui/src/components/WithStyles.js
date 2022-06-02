import React from "react";
import { withStyles } from "@material-ui/core";

// JSS approach
// withStyles
// makeStyles

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
};

function SideMenu(props) {
  const { classes } = props;
  return <div className={classes.sideMenu}>SideMenu</div>;
}

export default withStyles(style)(SideMenu);
