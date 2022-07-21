import "./App.css";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const food = searchParams.get("food");
  const dog = searchParams.get("dog");

  return (
    <div className="App">
      <p>food {food}</p>
      <p>dog {dog}</p>
      <button
        onClick={() =>
          setSearchParams({ dog: "update dog", food: "update food" })
        }
      >
        Update Url Params
      </button>
    </div>
  );
}

export default App;
