import HOC from "./modules/HOC/HOC";
import CryptoTable from "./modules/HOC/CryptoTable";
import PriceCSV from "./modules/HOC/PriceCSV";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HOC />
      <CryptoTable />
      <PriceCSV />
    </div>
  );
}

export default App;
