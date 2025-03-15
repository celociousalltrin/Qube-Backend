const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    song_name: { type: String, required: true },
    album_id: { type: mongoose.Types.ObjectId, ref: "Album", required: true },
    song_performer_name: { type: String, required: true },
    song_duration: { type: Number, required: true },
    alb_size: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("song", songSchema);
