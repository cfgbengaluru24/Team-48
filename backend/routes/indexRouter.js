// routes/index.js
const express = require('express');
const studentRoutes = require('./studentsRoutes.js');
const registerRoutes = require('./registerRoutes.js');
const queryRoutes = require('./queryRoutes.js');
const adminRoutes = require('./adminRoutes.js');
const feedbackRoutes = require("./feedbackRoutes.js");

const router = express.Router();

// Use the individual route modules
router.use('/students', studentRoutes);
router.use('/register', registerRoutes);
router.use('/query', queryRoutes);
router.use('/admin',adminRoutes);
router.use('/feedback',feedbackRoutes);

module.exports = router;
