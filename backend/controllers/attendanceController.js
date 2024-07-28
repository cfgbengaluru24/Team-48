const Attendance = require('../models/attendanceModel');

exports.upsertAttendance = async (req, res) => {
    try {
        const { studentId, date, isPresent } = req.body;  

        const existingAttendance = await Attendance.findOne({ studentId, date });

        if (existingAttendance) {
            if (isPresent) {
                existingAttendance.daysPresent += 1;
                await existingAttendance.save();
            }
        } else {
            await Attendance.create({
                studentId,
                date,
                daysPresent: isPresent ? 1 : 0
            });
        }

        res.status(200).json({ message: 'Attendance updated successfully', success: true });
    } catch (error) {
        res.status(400).json({ message: 'Failed to update attendance', success: false, error: error.message });
    }
};
