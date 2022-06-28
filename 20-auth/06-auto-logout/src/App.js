import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    localStorage.setItem("test-token", JSON.stringify({ token: "test token" }));
    setIsLogin(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("test-token");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="App">
      <h1>Login? {String(isLogin)}</h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}

export default App;
