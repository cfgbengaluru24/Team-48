const mongoose=require("mongoose")

const testSchema = new mongoose.Schema({
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Student', 
    },
    testId: {
      type: Number,
      required: true,
    },
    testScore: {
      type: Number,
      required: true,
      min: 0,
    },
    testName: {
      type: String,
      required: true,
    },
    testDate: {
      type: Date,
      default:Date.now,
      required: true,
    },
  });
  
  module.exports = mongoose.model('Test', testSchema);