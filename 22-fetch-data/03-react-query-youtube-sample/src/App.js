import { useState } from "react";
import "./App.css";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";

function App() {
  const [userId, setUserId] = useState();

  return (
    <div>
      <Users setUserId={setUserId} />
      {userId}
      <UserDetails userId={userId} />
    </div>
  );
}

export default App;
