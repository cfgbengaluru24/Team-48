const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const upload = require("../utils/fileUpload");

router.post("/upload", upload.single("file"), feedbackController.bulkAddFeedback);

module.exports = router;
