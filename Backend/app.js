require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var morganStream = require("./request-tracker/morganStream");
var connectDB = require("./config/mongoConnection");
var apiRouter = require("./routes");
const { notFoundResponse } = require("./utils/responseHandler");
const { responseMessage } = require("./utils/responseMessage");

var app = express();

connectDB();

app.use(morganStream);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: true, // Accepts any origin (any domain, protocol, or port)
    credentials: true, // Allow cookies/credentials with the request
  })
);

app.use("/", express.static(path.join(__dirname, "public", "css")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use("/api", apiRouter);

app.all("*", (req, res) => {
  if (req.accepts("html")) {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    notFoundResponse(res, responseMessage("ER001"));
  } else {
    res.send("404 Requested Page Not Found");
  }
});

module.exports = app;
