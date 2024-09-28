require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 5000;
app.listen(port, () => {
  console.log(`app is running on ${port} port`);
  console.log(`http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send(
    "The Backend app is running for Creating the system for makeing report files"
  );
});
