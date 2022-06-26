import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDetail" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
