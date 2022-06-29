import React from "react";
import "./App.css";
import useAuth from "./hooks/auth-hook";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import RedirectToLogin from "./components/RedirectToLogin";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Events from "./pages/Events";

function App() {
  const { isLogin, login, logout } = useAuth();

  return (
    <>
      <Navigation isLogin={isLogin} onLogout={logout} />
      <Routes>
        <Route path="/" element={<RedirectToLogin isLogin={isLogin} />}>
          {isLogin && (
            <>
              <Route index element={<Home />} />
              <Route path="users" element={<Users />} />
              <Route path="events" element={<Events />} />
            </>
          )}
          {!isLogin && (
            <Route
              path="login"
              element={
                <Login isLogin={isLogin} onLogin={login} onLogout={logout} />
              }
            />
          )}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
