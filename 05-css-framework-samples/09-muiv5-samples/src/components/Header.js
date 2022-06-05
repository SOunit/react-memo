import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            sx={{ mr: 2 }}
            onClick={toggleDrawerHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SideDrawer isOpen={drawerIsOpen} toggleDrawer={toggleDrawerHandler} />
    </>
  );
};

export default Header;
