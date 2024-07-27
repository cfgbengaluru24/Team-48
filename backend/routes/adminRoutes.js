const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/tests', adminController.getAllTestScores);

router.get('/tests', adminController.getQueryById);

router.get('/queries', adminController.getAllQueries);

router.put('/queries', adminController.updateQueryStatus);

module.exports = router;
