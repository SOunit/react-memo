import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/" className="mr-10">
          LOGO
        </Link>
        <Box>
          <NavLink to="/signup">Signup</NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
