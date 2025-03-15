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
    const songList = await db.find({ album_id: id });
    return songList;
  } catch (err) {
    throw new Error(err);
  }
};
