import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MENU_LIST = [
  { title: "employee", url: "/employee", icon: <MailIcon /> },
  { title: "b", url: "/b", icon: <MailIcon /> },
  { title: "c", url: "/c", icon: <MailIcon /> },
];

const SideDrawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  const menuItemClickHandler = (url) => {
    console.log(url);
    navigate(url);
  };

  const menuItemList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {MENU_LIST.map((menu) => (
          <ListItem key={menu.title} disablePadding>
            <ListItemButton onClick={() => menuItemClickHandler(menu.url)}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {menuItemList()}
      </Drawer>
    </>
  );
};

export default SideDrawer;
