import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const { isLogin, onLogout } = props;

  const logoutHandler = () => {
    onLogout();
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        {isLogin ? (
          <h1 className="text-2xl">isLogin</h1>
        ) : (
          <h1 className="text-2xl">isLogout</h1>
        )}
        {!isLogin && (
          <NavLink className="ml-5" to="login">
            Login
          </NavLink>
        )}
        {isLogin && (
          <>
            <NavLink className="ml-5" to="users">
              Users
            </NavLink>
            <NavLink className="ml-5" to="events">
              Events
            </NavLink>
            <NavLink className="ml-5" to="/">
              Home
            </NavLink>
            <p className="ml-5 cursor-pointer" onClick={logoutHandler}>
              Logout
            </p>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
