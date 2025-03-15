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
    let result = await db.find();
    return result;
  } catch (err) {
    throw new Error(err);
  }
};
