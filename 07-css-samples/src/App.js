import "./App.css";
import ArrayClass from "./components/ArrayClass";
import AssignClass from "./components/AssignClass";
import classes from "./App.module.css";
import ClassNames from "./components/ClassNames";
import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <div className="App">
      <ArrayClass />

      <AssignClass
        classes={`${classes["setMargin"]} ${classes["setBorderRed"]}`}
      />
      <AssignClass />
      <ClassNames />
      <StyledComponent />
    </div>
  );
}

export default App;
