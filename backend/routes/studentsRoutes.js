const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController");
const upload = require("../utils/fileUpload");

router.post("/", studentController.createStudent);

router.get("/:studentID", studentController.getStudentById);

router.post(
  "/:studentId/upload-resume",
  upload.single("resume"),
  studentController.uploadResume
);

module.exports = router;
