# steps

- setup socket server
- socket server need socket port!!!
- connect from client to server
- `socket.emit('event', data1, data2, data3)`
- `socket.on('event', (data1, data2, data3)=>{})`
- check connection by adding log to client

  ```
  import socketIoClient from "socket.io-client";

  const socket = socketIoClient({ path });
  console.log("useSocketAdapter socket", socket);
  ```
