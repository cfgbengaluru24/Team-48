// attendance controller 
const Attendance = require('../models/Attendance');

// POST: Add new attendance records
exports.addAttendance = async (req, res) => {
    try {
      const attendanceData = req.body;
      const attendanceRecords = [];
  
      if (typeof attendanceData === 'object' && !Array.isArray(attendanceData)) {
        for (const studentId in attendanceData) {
          for (const date in attendanceData[studentId]) {
            const { attendance, rating } = attendanceData[studentId][date];
  
            // Validate and parse studentId
            const parsedStudentId = parseInt(studentId, 10);
            if (isNaN(parsedStudentId)) {
              throw new Error(`Invalid studentId: ${studentId}`);
            }
  
            // Create new attendance record
            const record = new Attendance({
              studentId: parsedStudentId,
              date: new Date(date),
              status: attendance === 1,
              rating: rating || 0,
            });
  
            attendanceRecords.push(record);
          }
        }
      } else if (Array.isArray(attendanceData)) {
        // If attendanceData is an array, handle each item as an individual record
        attendanceData.forEach(item => {
          const { studentId, date, attendance, rating } = item;
  
          // Validate and parse studentId
          const parsedStudentId = parseInt(studentId, 10);
          if (isNaN(parsedStudentId)) {
            throw new Error(`Invalid studentId: ${studentId}`);
          }
  
          // Create new attendance record
          const record = new Attendance({
            studentId: parsedStudentId,
            date: new Date(date),
            status: attendance === 1,
            rating: rating || 0,
          });
  
          attendanceRecords.push(record);
        });
      } else {
        throw new Error('Invalid attendance data format');
      }
  
      if (attendanceRecords.length > 0) {
        await Attendance.insertMany(attendanceRecords);
        res.status(200).json({ message: 'Attendance data saved successfully' });
      } else {
        throw new Error('No valid attendance records to save');
      }
    } catch (error) {
      console.error('Error saving attendance data:', error);
      res.status(500).json({ error: 'Error saving attendance data' });
    }
  };
  


// // POST: Add new attendance records
// exports.addAttendance = async (req, res) => {
//   try {
//     const attendanceData = req.body;
//     const attendanceRecords = [];

//     for (const studentId in attendanceData) {
//       for (const date in attendanceData[studentId]) {
//         const { attendance, rating } = attendanceData[studentId][date];

//         const record = new Attendance({
//           studentId: parseInt(studentId),
//           date: new Date(date),
//           status: attendance === 1,
//           rating: rating || 0,
//         });

//         attendanceRecords.push(record);
//       }
//     }

//     await Attendance.insertMany(attendanceRecords);
//     res.status(200).json({ message: 'Attendance data saved successfully' });
//   } catch (error) {
//     console.error('Error saving attendance data:', error);
//     res.status(500).json({ error: 'Error saving attendance data' });
//   }
// };

// GET: Retrieve all attendance records
exports.getAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.json(attendanceRecords);
  } catch (error) {
    console.error('Error fetching attendance data:', error);
    res.status(500).json({ error: 'Error fetching attendance data' });
  }
};