import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink, Link, useNavigate } from "react-router-dom";
import tokenKeys from "../constants/token";

const Navigation = () => {
  const navigate = useNavigate();

  const logoutClickHandler = () => {
    console.log("Log out");

    localStorage.removeItem(tokenKeys.ACCESS_TOKEN);
    localStorage.removeItem(tokenKeys.REFRESH_TOKEN);

    navigate("/login");
  };

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
        <Typography
          to="/logout"
          className="mr-3 cursor-pointer"
          onClick={logoutClickHandler}
        >
          Logout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
