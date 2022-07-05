import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import User from "./pages/User";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/:userId/update" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
