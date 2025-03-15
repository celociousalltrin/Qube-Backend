const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    alb_name: { type: String, required: true },
    artist_name: { type: String, required: true },
    alb_type: {
      type: String,
      enum: {
        values: ["Album", "Single", "EP"],
        message: "{VALUE} is not a valid role",
      },
    },
    alb_released_on: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", albumSchema);
