import "./App.css";
import LoggedUser from "./components/LoggedUser";

function App() {
  return (
    <div className="App">
      <LoggedUser>
        {(username) =>
          username ? <div>username {username}</div> : <div>Not log in yet!</div>
        }
      </LoggedUser>
    </div>
  );
}

export default App;
