var express = require("express");
var path = require("path");

var albumRouter = require("../routes/albums");
var songRouter = require("../routes/songs");
var serverCheckRouter = require("../routes/server-check");

var router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
router.use("/album", albumRouter);
router.use("/song", songRouter);

//SERVER CHECK FRO RENDER.COM
router.use("/server-check", serverCheckRouter);

module.exports = router;
