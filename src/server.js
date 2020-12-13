const Docker  = require('dockerode');
const express = require('express');

const app     = express();
const server  = require('http').createServer(app);
const io      = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 8080;

const docker = new Docker();

app.use(express.static('build'));

app.get('/healthcheck', (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

const getContainersAndEmit = socket => {
  docker.listContainers({ all: true}, (err, containers) => {
    socket.emit('containers', containers);
  });
};

io.sockets.on('connection', (socket) => {
  console.log("Client connected");

  setInterval(() => {
    getContainersAndEmit(socket)
  }, 3000);

  socket.on("list", (data) => getContainersAndEmit(socket));
  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
