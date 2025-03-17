const { successResponse } = require("../utils/responseHandler");
const { responseMessage } = require("../utils/responseMessage");

exports.createAlbumService = async (db, data, res) => {
  try {
    const newAlbum = await db(data);
    await newAlbum.save();
    return successResponse({
      res,
      responseDetails: responseMessage("OK001"),
    });
  } catch (err) {
    console.log("🚀 ~ exports.createAlbumService= ~ err:", err);
    throw new Error(err);
  }
};

exports.getAllAlbumService = async (db) => {
  try {
    let result = await db.aggregate([
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
                duration: { $sum: "$song_duration" },
                size: { $sum: "$alb_size" },
              },
            },
            {
              $addFields: {
                size: {
                  $round: ["$size", 2],
                },
              },
            },
            {
              $project: {
                _id: 0,
              },
            },
          ],
          as: "result",
        },
      },
      {
        $unwind: {
          path: "$result",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};
