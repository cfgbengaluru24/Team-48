// models/StudentScore.js
const mongoose = require('mongoose');

const studentScoreSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  score: { type: Number, required: true },
});

module.exports = mongoose.model('StudentScore', studentScoreSchema);