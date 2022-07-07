import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Users from "./pages/Users";
import Items from "./pages/Items";
import Books from "./pages/Books";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  const { errorMessage } = useSelector((state) => state.error);

  console.log(errorMessage);

  return (
    <>
      <Modal isOpen={!!errorMessage} title={errorMessage} />
      <Backdrop className={!!errorMessage ? "z-10" : "opacity-0 -z-10"} />
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
