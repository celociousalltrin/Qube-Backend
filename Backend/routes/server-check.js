var express = require("express");
const { successResponse, errorResponse } = require("../utils/responseHandler");
const { responseMessage } = require("../utils/responseMessage");

var router = express.Router();

function isTimeoutError(error) {
  // You can customize this function based on how timeout errors are identified in the code
  return error instanceof Error && error.message.includes("timeout");
}

router.get("/", (req, res) => {
  try {
    return successResponse({
      res,
      responseDetails: responseMessage("OK004"),
    });
  } catch (err) {
    console.log("🚀 ~ file: likeController.js:10 ~ err:", err);
    if (isTimeoutError(err)) {
      return errorResponse({ res, responseDetails: responseMessage("ER998") });
    } else {
      // Handle other types of errors or provide a generic error message
      return errorResponse({ res, responseDetails: responseMessage("ER999") });
    }
  }
});

module.exports = router;
