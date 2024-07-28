const Question = require('../models/Question');
const StudentScore = require('../models/StudentScore');

exports.submitAssessment = async (req, res) => {
  try {
    const { studentName, answers } = req.body; // answers is an array of { questionId, answer }

    let score = 0;

    for (const answer of answers) {
      const question = await Question.findById(answer.questionId);
      if (question) {
        if (answer.answer === question.correctAnswer) {
          score += 3; // Correct answer
        } else {
          score -= 1; // Wrong answer
        }
      }
    }

    // Save the score to the database
    const studentScore = new StudentScore({ studentName, score });
    await studentScore.save();

    res.status(200).json({ message: 'Assessment completed', score });
  } catch (error) {
    res.status(400).json({ message: 'Failed to submit assessment', error: error.message });
  }
};