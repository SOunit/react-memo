import "./App.css";
import ArrayClass from "./components/ArrayClass";
import AssignClass from "./components/AssignClass";
import classes from "./App.module.css";
import ClassNames from "./components/ClassNames";

function App() {
  return (
    <div className="App">
      <ArrayClass />

      <AssignClass
        classes={`${classes["setMargin"]} ${classes["setBorderRed"]}`}
      />
      <AssignClass />
      <ClassNames />
    </div>
  );
}

export default App;
