const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//logging middleware
app.use(morgan("dev"));

//static middleware
app.use(express.static(path.join(__dirname, "../public/index.html")));

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//including our routes
app.use("./api", require("./api"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Error handling
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});

module.exports = app;
