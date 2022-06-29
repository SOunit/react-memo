import { Button } from "@mui/material";
import React from "react";

const Login = (props) => {
  const { onLogin, onLogout } = props;

  const loginHandler = () => {
    onLogin();
  };

  const logoutHandler = () => {
    onLogout();
  };

  return (
    <div>
      <Button variant="outlined" onClick={loginHandler}>
        Login
      </Button>
      <Button variant="outlined" onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
};

export default Login;
