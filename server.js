const express = require("express");

const app = express();

const port = process.env.PORT || 6523;

app.get("/", (req, res) => {
  res.send("THis works fine.");
});

app.get("/data", (req, res) => {
  res.send("THis is data.");
});

app.listen(port, () => console.log(`Server running at ${port}`));
