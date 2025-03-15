const albumModel = require("../models/albumModel");
const { successResponse, errorResponse } = require("../utils/responseHandler");
const { responseMessage } = require("../utils/responseMessage");
const {
  createAlbumService,
  getAllAlbumService,
} = require("../services/albumService");

exports.get_all_albums = [
  async (req, res) => {
    try {
      const result = await getAllAlbumService(albumModel);
      return successResponse({
        res,
        response_data: result,
      });
    } catch (err) {
      return errorResponse({ res, responseDetails: responseMessage("ER999") });
    }
  },
];
exports.create_album = [
  async (req, res) => {
    try {
      await createAlbumService(albumModel, req.body, res);
    } catch (err) {
      return errorResponse({ res, responseDetails: responseMessage("ER999") });
    }
  },
];
