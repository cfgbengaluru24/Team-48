const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const upload = require('../config/multer');


router.post('/', studentController.createStudent);

router.get('/:studentID', studentController.getStudentById);

router.post('/:studentId/upload-resume', upload.single('resume'), studentController.uploadResume);

module.exports = router;
