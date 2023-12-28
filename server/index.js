const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
