import React, { useEffect, useState } from "react";
import "./App.css";
import { ONE_SECOND } from "./constants/time";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const logout = () => {
    localStorage.removeItem("test-token");
    setIsLogin(false);
  };

  const login = (expirationDate) => {
    const currentTime = new Date().getTime();
    const tokenExpirationDate =
      expirationDate || new Date(currentTime + ONE_SECOND);

    console.log("tokenExpirationDate", tokenExpirationDate);

    localStorage.setItem(
      "test-token",
      JSON.stringify({
        token: "test token",
        expiration: tokenExpirationDate.toISOString(),
      })
    );
    setIsLogin(true);
  };

  const loginHandler = () => {
    login();
  };

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("test-token"));

    console.log("storedData", storedData);

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="App">
      <h1>isLogin: {String(isLogin)}</h1>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default App;
