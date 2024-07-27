const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.getAllTestScores);

router.get('/register', authController.getQueryById);

module.exports = router;
