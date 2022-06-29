import Counter from "./components/Counter";

import "./App.css";
import User from "./components/User";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Movies />
      <User />
      <Counter />
    </div>
  );
}

export default App;
