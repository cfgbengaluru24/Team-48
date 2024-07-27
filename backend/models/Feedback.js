const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  weekNo: {
    type: Number,
    required: true,
  },
  lectureName: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  additionalFeedback: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
