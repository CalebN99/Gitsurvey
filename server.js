const express = require("express");
const path = require("path");
const app = express();


app.listen(3030, function () {
  console.log("Server hosted on port 3030");
});

app.get("/", function(req, res) {
  res.send("Yo")
})