const Attendance = require('../models/attendanceModel');
const ParentalBehavior = require('../models/parentalBehaviorModel');

exports.getHeatMapData = async (req, res) => {
    try {
        const attendanceData = await Attendance.find();
        const behaviorData = await ParentalBehavior.find();

        const behaviorMap = behaviorData.reduce((map, behavior) => {
            map[behavior.studentId] = behavior.behaviorScore;
            return map;
        }, {});

        const aggregatedData = attendanceData.map(att => {
            const behaviorScore = behaviorMap[att.studentId] || 0;
            return {
                studentId: att.studentId,
                date: att.date,
                status: att.status,
                behaviorScore: behaviorScore
            };
        });

        res.status(200).json({ success: true, data: aggregatedData });
    } catch (error) {
        res.status(400).json({ message: 'Failed to retrieve heat map data', success: false, error: error.message });
    }
};
