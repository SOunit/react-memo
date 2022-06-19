import "./App.css";
import { useEffect, useState } from "react";
import SocketAdapter from "./services/socket.adapter";

function App() {
  const [input, setInput] = useState("");
  const [socketId, setSocketId] = useState("");
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // connect to backend server with socket port
    SocketAdapter.init(onReceiveMessage, onConnect);
  }, []);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onReceiveMessage = (message) => {
    setDataList((prev) => {
      if (prev.find((msg) => msg.id === message.id)) {
        return prev;
      }

      return [...prev, message];
    });
  };

  const onConnect = (socketId) => {
    setSocketId(socketId);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("input", input);
    const newMessage = { id: Math.random(), value: input };
    SocketAdapter.sendMessage(newMessage);
    setInput("");
  };

  return (
    <div className="App">
      <h1>SocketIoClient {socketId}</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={inputChangeHandler} />
        <button>Submit</button>
      </form>
      {dataList.map((data) => (
        <p key={data.id}>{data.value}</p>
      ))}
    </div>
  );
}

export default App;
