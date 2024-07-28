const Student = require('../models/Student');
const Test = require('../models/Test');

const getStudentById = async (req, res) => {
  const { studentId } = req.params;
  try {
    const student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found!' });
    }
    res.json({data: student, success: true, message: "Student found for given id"});
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getStudentByEmail = async(req,res) => {
  const {email} = req.body;
  try {
    const student = await Student.findOne({email});
    if(!student){
      return res.status(404).json({ success: false, message: 'Student not found!' });
    }
    delete student.password;
    return res.json({data: student, success: true, message: "Student retrieved successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: err.message});
  }
}

const updateStudent = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'email not given'
    });
  }

  let student;
  try {
    student = await Student.findOne({ email });
  } catch (error) {
    console.error("Error occurred while finding the student:", error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while finding the student'
    });
  }
  if (!student) {
    return res.status(400).json({
      success: false,
      message: 'Student with given email not found'
    });
  }

  const { name, college, address, phone, github_link, linkedin_profile } = req.body;

  // Update only provided fields
  if (name !== undefined && name !== null) student.name = name;
  if (college !== undefined && college !== null) student.college = college;
  if (address !== undefined && address !== null) student.address = address;
  if (phone !== undefined && phone !== null) student.phone = phone;
  if (github_link !== undefined && github_link !== null) student.github_link = github_link;
  if (linkedin_profile !== undefined && linkedin_profile !== null) student.linkedin_profile = linkedin_profile;

  try {
    await student.save();
    return res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: student
    });
  } catch (error) {
    console.error("Error occurred while updating the student:", error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while updating the student'
    });
  }
}

const uploadResume = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findOne({ studentId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    // Update the student's resume file path
    student.resumeFilePath = req.file.path;
    await student.save();

    res.json({ message: 'Resume uploaded successfully!', student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getTestMarksByTestId = async(req,res) => {
  const {testId} = req.params;
  if(!testId){
    res.end(400).json({
      success: false,
      message: "No test id send"
    })
  }
  const test = await Test.findOne({testId});
  if(!test){
    res.end(400).json({
      success: false,
      message: 'No test found',
    })
  }
  res.send(200).json({
    success: true,
    message: "Test found successfully",
    data: test
  })
}

const getTestMarksByStudentId = async(req,res) => {
  const {studentId} = req.params;
  if(!studentId){
    res.end(400).json({
      success: false,
      message: "No student id send"
    })
  }
  const test = await Test.findOne({studentId});
  if(!test){
    res.end(400).json({
      success: false,
      message: 'No test found',
    })
  }
  res.send(200).json({
    success: true,
    message: "Test found successfully",
    data: test
  })
}

module.exports = {
  updateStudent,
  getStudentById,
  uploadResume,
  getTestMarksByStudentId,
  getTestMarksByTestId,getStudentByEmail
};
