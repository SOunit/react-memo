import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RedirectToLogin = (props) => {
  const { isLogin } = props;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("RedirectToLogin isLogin", isLogin);

    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RedirectToLogin;
