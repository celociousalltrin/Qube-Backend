var express = require("express");
var { create_album, get_all_albums } = require("../controllers/albumContoller");
var router = express.Router();

router.get("/", get_all_albums);
router.post("/", create_album);

module.exports = router;
