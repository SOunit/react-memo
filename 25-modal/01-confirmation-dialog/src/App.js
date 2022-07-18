import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <ConfirmationModal open={open} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
