import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
