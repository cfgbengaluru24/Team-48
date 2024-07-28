const express = require('express');
const assessmentController = require('../controllers/assessmentController');

const router = express.Router();

router.post('/assessment', assessmentController.submitAssessment);

module.exports = router;