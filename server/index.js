const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventsRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
