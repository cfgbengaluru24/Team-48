exports.upsertParentalBehavior = async (req, res) => {
    try {
        const { studentId, behaviorScore } = req.body;

        const existingBehavior = await ParentalBehavior.findOne({ studentId });

        if (existingBehavior) {
            existingBehavior.behaviorScore = behaviorScore;
            await existingBehavior.save();
        } else {
            await ParentalBehavior.create({ studentId, behaviorScore });
        }

        res.status(200).json({ message: 'Parental behavior updated successfully', success: true });
    } catch (error) {
        res.status(400).json({ message: 'Failed to update parental behavior', success: false, error: error.message });
    }
};
