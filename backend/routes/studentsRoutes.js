const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController");
const upload = require("../utils/fileUpload");

router.get("/:studentId", studentController.getStudentById);
router.post('/email', studentController.getStudentByEmail);

router.post(
  "/:studentId/upload-resume",
  upload.single("resume"),
  studentController.uploadResume
);

router.get('/test/student/:studentId',studentController.getTestMarksByStudentId);

router.get('/test/:testId',studentController.getTestMarksByTestId);

router.patch('/update',studentController.updateStudent)

module.exports = router;
