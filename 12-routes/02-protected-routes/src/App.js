import React from "react";
import "./App.css";
import useAuth from "./hooks/auth-hook";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navigation from "./pages/Navigation";

function App() {
  const { isLogin, login, logout } = useAuth();

  return (
    <>
      <Navigation isLogin={isLogin} />
      <Routes>
        <Route
          path="/"
          element={
            <Login isLogin={isLogin} onLogin={login} onLogout={logout} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
