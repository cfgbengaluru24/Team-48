import React, { useState } from 'react';
import StudentLayout from './StudentLayout';

function StudentPortal() {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleQueryChange = (e) => { 
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    // Simulate submission
    setShowModal(false);
    setSubmissionSuccess(true);
    setQuery('');
    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 3000);
  };

  const handleCancel = () => {
    setShowModal(false);
    setQuery('');
  };

  return (
    <StudentLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Portal Section</h1>
        <p className="text-lg mb-2">"The beautiful thing about learning is that no one can take it away from you." - B.B. King</p>
        <p className="text-lg">This is the portal section where you can post your queries.</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Feel Free to Post Your Query
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4">Post Your Query</h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Write your query here..."
              value={query}
              onChange={handleQueryChange}
            />
            <div className="flex justify-end">
              <button
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {submissionSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Submission Completed
        </div>
      )}
    </StudentLayout>
  );
}

export default StudentPortal;
