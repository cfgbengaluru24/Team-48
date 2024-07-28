import React, { useState, useEffect } from 'react';

function QuestionsForm({ assessment, onClose, onSave }) {
  const [questions, setQuestions] = useState(
    assessment.questions || Array.from({ length: assessment.numQuestions }, () => ({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
    }))
  );

  const handleChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(questions);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-screen overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">Enter Questions</h3>
        <form onSubmit={handleSubmit}>
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Question {qIndex + 1}</label>
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleChange(qIndex, 'question', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-4"
                required
              />
              <label className="block text-gray-700 font-bold mb-2">Options</label>
              {q.options.map((option, oIndex) => (
                <input
                  key={oIndex}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-2"
                  placeholder={`Option ${oIndex + 1}`}
                  required
                />
              ))}
              <label className="block text-gray-700 font-bold mb-2">Correct Answer</label>
              <input
                type="text"
                value={q.correctAnswer}
                onChange={(e) => handleChange(qIndex, 'correctAnswer', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionsForm;
