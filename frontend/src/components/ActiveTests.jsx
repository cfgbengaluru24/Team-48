import React from 'react';
import { useNavigate } from 'react-router-dom';

function ActiveTests({ tests }) {
  const navigate = useNavigate();

  const handleTakeTest = (testId) => {
    navigate(`/student/exam/${testId}`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Active Tests</h2>
      <ul>
        {tests.map(test => (
          <li key={test.id} className="flex justify-between items-center mb-2">
            <span>{test.name}</span>
            <button
              onClick={() => handleTakeTest(test.id)}
              className="bg-green-500 text-white px-2 py-1 rounded-lg"
            >
              Take Test
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActiveTests;
