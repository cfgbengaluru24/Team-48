const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


router.post('/', studentController.createStudent);


router.get('/:studentID', studentController.getStudentById);

module.exports = router;
