const express = require("express");

const app = express();

const port = process.env.PORT || 6523;

app.get("/", (req, res) => {
  res.send("THis works fine.");
});

app.listen(port, () => console.log(`Server running at ${port}`));
