import "./App.css";
import { io } from "socket.io-client";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [socketId, setSocketId] = useState("");
  const [dataList, setDataList] = useState([]);

  // connect to backend server with socket port
  const socket = io(`http://localhost:${process.env.REACT_APP_SOCKET_PORT}`);

  socket.emit("custom-event", 10, "Hi", { a: "a" });

  socket.on("receive-message", (message) => {
    setDataList((prev) => {
      if (prev.find((msg) => msg.id === message.id)) {
        return prev;
      }

      return [...prev, message];
    });
  });

  socket.on("on-connect", (socket) => {
    setSocketId(socket.socketId);
  });

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("input", input);

    const newMessage = { id: Math.random(), value: input };

    socket.emit("send-message", newMessage);

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
