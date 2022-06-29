import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const Navigation = (props) => {
  const { isLogin } = props;

  return (
    <AppBar position="relative">
      <Toolbar>{isLogin ? <h1>isLogin</h1> : <h1>isLogout</h1>}</Toolbar>
    </AppBar>
  );
};

export default Navigation;
