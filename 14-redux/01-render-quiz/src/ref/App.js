import { connect } from "react-redux";
import "./App.css";

function App({ openTodos, completedTodos, totalCount, addToDo }) {
  return (
    <div className="App">
      {openTodos.map((todo) => (
        <li>{todo.name}</li>
      ))}
      <button onClick={() => addToDo("Buy Milk")}>ADD TO DO</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    openTodos: state.todos.filter((todo) => todo.complete !== true),
    completedTodos: state.todos.filter((todo) => todo.complete === true),
    totalCount: state.todos.length
  };
};

const addToDo = (text) => ({
  type: "ADD_TODO",
  payload: { text, id: Math.random().toString().slice(-6) }
})
const removeToDo = (id) => ({ type: "REMOVE_TODO", payload: id })
const changeStatus = (id, done) => ({ type: "CHANGE_TODO_STATUS", payload: { id, done } })

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     addToDo: (text) => dispatch(addToDo(text)),
//     removeToDo: (id) => dispatch(removeToDo(id)),
//     changeStatus: (id, done) => dispatch(changeStatus(id, done))
//   };
// };

const mapDispatchToProps = {
    addToDo,
    removeToDo,
    changeStatus
};

export default connect(
  mapStateToProps, //access part of the global state
  mapDispatchToProps //dispatching actions
)(App);
