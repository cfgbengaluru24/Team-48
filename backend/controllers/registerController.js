const Register = require('../models/Student');


const RegisterStudent = async (req, res) => {
    const { studentId, name, college, address, phone, email } = req.body;
    try {
      const student = new Student({ studentId, name, college, address, phone, email });
      await student.save();
      res.status(201).json({ message: 'Student created successfully!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  module.exports = {
    RegisterStudent
  };