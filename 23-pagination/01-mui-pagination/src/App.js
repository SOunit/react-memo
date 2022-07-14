import "./App.css";
import Pagination from "./components/Pagination";
import { PRODUCTS } from "./data/data";

function App() {
  return (
    <div className="App">
      {PRODUCTS.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
      <Pagination />
    </div>
  );
}

export default App;
