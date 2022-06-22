import React from "react";
import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

const Button = (props) => {
  const {
    text,
    size = "large",
    color = "primary",
    variant = "contained",
    onClick,
    ...other
  } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
