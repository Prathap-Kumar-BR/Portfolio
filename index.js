require("dotenv").config;
const express = require("express");
const path = require("path");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
  );
}

PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server runing"));
