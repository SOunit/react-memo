import "./App.css";
import { io } from "socket.io-client";

function App() {
  // connect to backend server with socket port
  const socket = io(`http://localhost:${process.env.REACT_APP_SOCKET_PORT}`);

  socket.emit("custom-event", 10, "Hi", { a: "a" });

  return (
    <div className="App">
      <h1>SocketIoClient</h1>
    </div>
  );
}

export default App;
