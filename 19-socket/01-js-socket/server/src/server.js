const express = require("express");

const app = express();

const SOCKET_PORT = process.env.SOCKET_PORT || 5050;
const PORT = process.env.PORT || 5000;

const io = require("socket.io")(SOCKET_PORT, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  socket.emit("on-connect", { socketId: socket.id });

  socket.on("custom-event", (num, str, obj) => {
    // console.log("custom-event", num, str, obj);
  });

  socket.on("send-message", (message) => {
    io.emit("receive-message", message);
    console.log("send-message", message);
  });
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
