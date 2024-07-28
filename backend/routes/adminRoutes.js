const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/tests', adminController.getAllTestScores);

router.get('/query/:id', adminController.getQueryById);

router.get('/query', adminController.getAllQueries);

router.put('/query', adminController.updateQueryStatus);

module.exports = router;

// getquery by id