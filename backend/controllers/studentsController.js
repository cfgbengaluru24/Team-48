const Student = require('../models/Student');


const createStudent = async (req, res) => {
  const { studentId, name } = req.body;
  try {
    const student = new Student({ studentId, name });
    await student.save();
    res.status(201).json({ message: 'Student created successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const getStudentById = async (req, res) => {
  const { studentId } = req.params;
  console.log(req.body)
  try {
    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found!' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createStudent,
  getStudentById
};
