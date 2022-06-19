# steps

- setup socket server
- socket server need socket port!!!
  - actually same port is ok, because protocol is different
  - heroku offer one random port, and can handle both http and socket protocols
- connect from client to server
- `socket.emit('event', data1, data2, data3)`
- `socket.on('event', (data1, data2, data3)=>{})`
- check connection by adding log to client

  ```
  import socketIoClient from "socket.io-client";

  const socket = socketIoClient({ path });
  console.log("useSocketAdapter socket", socket);
  ```
