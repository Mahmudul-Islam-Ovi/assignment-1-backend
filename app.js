const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

//home route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// url not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "404 Not Found",
  });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something is Broke",
  });
});

module.exports = app;
