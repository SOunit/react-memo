import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div className="App">/</div>} />
      </Routes>
    </>
  );
}

export default App;
