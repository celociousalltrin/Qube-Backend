const songModel = require("../models/songModel");
const albumModel = require("../models/albumModel");
const { successResponse, errorResponse } = require("../utils/responseHandler");
const { responseMessage } = require("../utils/responseMessage");
const {
  createSongService,
  getSongsByAlbum,
} = require("../services/songService");

exports.get_songs_by_album = [
  async (req, res) => {
    try {
      const { album_id } = req.params;
      const result = await getSongsByAlbum(albumModel, album_id);
      return successResponse({
        res,
        response_data: result,
      });
    } catch (err) {
      return errorResponse({ res, responseDetails: responseMessage("ER999") });
    }
  },
];
exports.create_songs = [
  async (req, res) => {
    try {
      await createSongService(songModel, req.body, res);
    } catch (err) {
      return errorResponse({ res, responseDetails: responseMessage("ER999") });
    }
  },
];
