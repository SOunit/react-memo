import "./App.css";
import { getUsers } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Welcome to React Redux Saga Crash Course 2021</h1>
      {loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}

export default App;
