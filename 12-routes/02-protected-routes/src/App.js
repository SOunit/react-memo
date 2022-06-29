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
      {isLogin ? <h1>isLogin</h1> : <p>isLogout</p>}
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default App;
