const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hgfkegr");
});

app.listen(8000, () => {
  console.log("success");
});
