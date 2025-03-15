var mongoose = require("mongoose");

const { successResponse } = require("../utils/responseHandler");
const { responseMessage } = require("../utils/responseMessage");

exports.createSongService = async (db, data, res) => {
  try {
    const newSong = await db(data);
    await newSong.save();
    return successResponse({
      res,
      responseDetails: responseMessage("OK002"),
    });
  } catch (err) {
    console.log("🚀 ~ exports.createSongService= ~ err:", err);
    throw new Error(err);
  }
};

exports.getSongsByAlbum = async (db, id) => {
  try {
    const songList = await db.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "songs",
          localField: "_id",
          foreignField: "album_id",
          as: "songs_list",
        },
      },
      {
        $lookup: {
          from: "songs",
          let: { albumId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$albumId", "$album_id"],
                },
              },
            },
            {
              $group: {
                _id: "$album_id",
                count: { $sum: 1 },
                size: { $sum: "$alb_size" },
                duration: { $sum: "$song_duration" },
              },
            },
          ],
          as: "meta_song_data",
        },
      },
      {
        $unwind: {
          path: "$meta_song_data",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
    return songList;
  } catch (err) {
    console.log("🚀 ~ exports.getSongsByAlbum= ~ err:", err);
    throw new Error(err);
  }
};
