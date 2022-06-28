import { useEffect } from "react";
import "./App.css";
import { getUsers } from "./features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux toolkit createAsyncThunk</h1>
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}

export default App;
