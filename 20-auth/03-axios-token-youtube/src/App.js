import { useState } from "react";
import axios from "axios";
import "./App.css";

const accessToken = "accessTokenFromJWT";
const apiUrl = "https://jsonplaceholder.typicode.com";

// pattern1. general setup
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// pattern2. setup specific axios
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

function App() {
  const [users, setUsers] = useState([]);
  const [requestError, setRequestError] = useState();

  const fetchData = async () => {
    console.log("click");

    try {
      // pattern1.
      // const response = await axios.get(`${apiUrl}/users`);

      // pattern2. create unique axios
      const response = await authAxios.get(`/users`);
      setUsers(response.data);
    } catch (error) {
      setRequestError(error.message);
    }
  };

  const clickHandler = () => {
    fetchData();
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>Request!!!</button>
      {requestError && <p>{requestError}</p>}
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default App;
