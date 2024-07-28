import React from 'react';

function ViewAssessment({ assessment, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl max-h-screen overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">Assessment Details</h3>
        <h4 className="text-xl font-bold">{assessment.name}</h4>
        <p>Total Questions: {assessment.questions.length}</p>
        {assessment.questions.map((q, qIndex) => (
          <div key={qIndex} className="mb-6">
            <p className="font-bold mb-2">Question {qIndex + 1}: {q.question}</p>
            <ul className="list-disc list-inside">
              {q.options.map((option, oIndex) => (
                <li key={oIndex} className={q.correctAnswer === option ? 'text-green-500 font-bold' : ''}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewAssessment;
