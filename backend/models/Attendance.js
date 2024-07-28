const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: Number,
  },
  date: {
    type: String,
  },
  status: {
    type: Number,
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model('Attendance', attendanceSchema);