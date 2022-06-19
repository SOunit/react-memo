import express from "express";
import { Server } from "socket.io";
import http from "http";

const PORT = process.env.PORT || 5000;
const WEB_SOCKET_CORS = { origin: "*" };

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: WEB_SOCKET_CORS });

io.on("connection", (socket) => {
  socket.emit("on-connect", { socketId: socket.id });

  socket.on("custom-event", (num, str, obj) => {
    console.log("custom-event", num, str, obj);
  });

  socket.on("send-message", (message) => {
    io.emit("receive-message", message);
    console.log("send-message", message);
  });
});

httpServer.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
