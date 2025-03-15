var express = require("express");
var {
  create_songs,
  delete_song,
  get_songs_by_album,
} = require("../controllers/songController");
var router = express.Router();

router.get("/:album_id", get_songs_by_album);
router.post("/", create_songs);

module.exports = router;
