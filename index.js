const express = require("express");

const app = express();

const port = process.env.PORT || 3565;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.listen(port, () => console.log(`Server running at ${port}`));