const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();
const http = require("http").Server(app);

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventsRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/posts', postRoutes);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

socketIO.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  socket.on('message', (data) => {
    console.log(data);
    socketIO.emit('messageResponse', data);
  })

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});
