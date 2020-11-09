const express = require("express");

const app = express();

const port = process.env.PORT || 6523;

app.get("/", (req, res) => {
  res.send("Hey there!");
});

app.listen(port, () => console.log(`Server running at ${port}`));
