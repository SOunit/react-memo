import { io } from "socket.io-client";

class SocketAdapter {
  static socket;

  static init(onReceiveMessage, onConnect) {
    const path = process.env.REACT_APP_SOCKET_URL;
    console.log("path", path);
    this.socket = io(path);

    console.log(this.socket);

    this.socket.emit("custom-event", 10, "Hi", { a: "a" });

    this.socket.on("receive-message", (message) => {
      onReceiveMessage(message);
    });

    this.socket.on("on-connect", (socket) => {
      onConnect(socket.socketId);
    });
  }

  static sendMessage(newMessage) {
    this.socket.emit("send-message", newMessage);
  }
}

export default SocketAdapter;
