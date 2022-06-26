import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/" className="mr-10">
          LOGO
        </Link>
        <NavLink to="/signup" className="mr-3">
          Signup
        </NavLink>
        <NavLink to="/login" className="mr-3">
          Login
        </NavLink>
        <NavLink to="/userDetail" className="mr-3">
          UserDetail
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
