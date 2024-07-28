// route
const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// POST endpoint for adding attendance
router.post('/', attendanceController.addAttendance);

// GET endpoint for fetching attendance
router.get('/', attendanceController.getAttendance);

module.exports = router;