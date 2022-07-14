import { useSelector } from "react-redux";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
      <Pagination />
    </div>
  );
}

export default App;
