import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import Tour from "./pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
