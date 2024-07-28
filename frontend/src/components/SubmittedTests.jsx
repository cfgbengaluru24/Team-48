import React, { useState } from 'react';

function SubmittedTests({ tests }) {
  const [selectedTest, setSelectedTest] = useState(null);

  const handleCheckScore = (test) => {
    setSelectedTest(test);
  };

  const handleCloseModal = () => {
    setSelectedTest(null);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submitted Tests</h2>
      <ul>
        {tests.map(test => (
          <li key={test.id} className="flex justify-between items-center mb-2">
            <span>{test.name}</span>
            <button
              onClick={() => handleCheckScore(test)}
              className="bg-blue-500 text-white px-2 py-1 rounded-lg"
            >
              Check Score
            </button>
          </li>
        ))}
      </ul>

      {selectedTest && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{selectedTest.name} - Score</h3>
            <p>Score: {selectedTest.score}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmittedTests;
