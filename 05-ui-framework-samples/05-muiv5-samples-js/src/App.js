import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./components/form/EmployeeForm";
import Header from "./components/header/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import Employee from "./pages/Employee";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<div className="App">/</div>} />
        <Route
          path="/employee"
          element={
            <div className="App">
              <Employee />
            </div>
          }
        />
        <Route path="/b" element={<div className="App">/b</div>} />
        <Route path="/c" element={<div className="App">/c</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
