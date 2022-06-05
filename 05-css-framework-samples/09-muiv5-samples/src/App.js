import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div className="App">/</div>} />
        <Route path="/a" element={<div className="App">/a</div>} />
        <Route path="/b" element={<div className="App">/b</div>} />
        <Route path="/c" element={<div className="App">/c</div>} />
      </Routes>
    </>
  );
}

export default App;
