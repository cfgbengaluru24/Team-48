const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }], // Array of options
  correctAnswer: { type: String, required: true }, // Correct answer
});

module.exports = mongoose.model('Question', questionSchema);