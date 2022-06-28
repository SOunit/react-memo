import React from "react";
import "./App.css";
import useAuth from "./hooks/auth-hook";

function App() {
  const { isLogin, login, logout } = useAuth();

  const loginHandler = () => {
    login();
  };

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className="App">
      <h1>isLogin: {String(isLogin)}</h1>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default App;
