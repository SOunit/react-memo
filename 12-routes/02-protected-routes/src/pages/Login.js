import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { onLogin, onLogout } = props;
  const navigate = useNavigate();

  const loginHandler = () => {
    onLogin();
    navigate("/");
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
