const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
  try {
    const { questionText, options, correctAnswer } = req.body;

    // Validate that correctAnswer is one of the options
    if (!options.includes(correctAnswer)) {
      return res.status(400).json({ message: 'Correct answer must be one of the options.' });
    }

    const question = new Question({ questionText, options, correctAnswer });
    await question.save();
    res.status(201).json({ message: 'Question added successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add question', error: error.message });
  }
};

// exports.getAllQuestions = async (req, res) => {
//   try {
//     const questions = await Question.find();
//     res.status(200).json(questions);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to retrieve questions', error: error.message });
//   }
// };

// const Question = require('../models/Question');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve questions', error: error.message });
  }
};
