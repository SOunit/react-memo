# url

- How to simultaneously run the client and server instances of your full-stack app in one folder.
  https://levelup.gitconnected.com/how-to-simultaneously-run-the-client-and-server-of-your-full-stack-app-in-one-folder-ef5a988d56d7

# memo

- websocket
  - keep connection open between client and server

# steps

## server

- minimum setup is below

```
const PORT = 5000;

const io = require("socket.io")(PORT);

io.on("connection", (socket) => {
  console.log(socket.id);
});

```

## client

- install `socket.io-client`
