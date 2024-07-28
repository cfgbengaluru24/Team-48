const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router();

router.post('/questions', questionController.addQuestion);
router.get('/questions', questionController.getAllQuestions);

module.exports = router;