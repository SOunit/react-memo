import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Users from "./pages/Users";
import Items from "./pages/Items";
import Books from "./pages/Books";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/items" element={<Items />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
