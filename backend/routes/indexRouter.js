// routes/index.js
const express = require('express');
const studentRoutes = require('./studentsRoutes.js');
const registerRoutes = require('./registerRoutes.js');
const queryRoutes = require('./queryRoutes.js');

const router = express.Router();

// Use the individual route modules
router.use('/students', studentRoutes);
router.use('/register', registerRoutes);
router.use('/query', queryRoutes);

module.exports = router;
