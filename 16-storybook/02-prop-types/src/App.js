import Component from "./components/Component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Component
        name="Jack"
        age={38}
        element={<div>element</div>}
        array={[1, "2", 3]}
        person={{ name: "Jack", age: 38 }}
      />
    </div>
  );
}

export default App;
