import React, { useState } from 'react';
import AdminSidebar from './AdminSideBar.jsx';
import CreateAssessmentSheet from './CreateAssessmentSheet';
import QuestionsForm from './QuestionsForm';
import ViewAssessment from './ViewAssessment';

function AdminAptitudeQuestions() {
  const [showCreateSheet, setShowCreateSheet] = useState(false);
  const [showQuestionsForm, setShowQuestionsForm] = useState(false);
  const [showViewAssessment, setShowViewAssessment] = useState(false);
  const [assessments, setAssessments] = useState([]);
  const [currentAssessment, setCurrentAssessment] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleCreateSheet = (assessment) => {
    setCurrentAssessment(assessment);
    setShowCreateSheet(false);
    setShowQuestionsForm(true);
  };

  const handleSaveQuestions = (questions) => {
    if (currentIndex !== null) {
      const updatedAssessments = assessments.map((assessment, index) =>
        index === currentIndex ? { ...assessment, questions } : assessment
      );
      setAssessments(updatedAssessments);
    } else {
      const newAssessment = { ...currentAssessment, questions };
      setAssessments([...assessments, newAssessment]);
    }
    setShowQuestionsForm(false);
    setCurrentAssessment(null);
    setCurrentIndex(null);
  };

  const handleEdit = (index) => {
    setCurrentAssessment(assessments[index]);
    setCurrentIndex(index);
    setShowQuestionsForm(true);
  };

  const handleDelete = (index) => {
    const updatedAssessments = assessments.filter((_, i) => i !== index);
    setAssessments(updatedAssessments);
  };

  const handlePost = (index) => {
    // Logic to post the assessment to the student portal
  };

  const handleView = (index) => {
    setCurrentAssessment(assessments[index]);
    setShowViewAssessment(true);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-8 w-full">
        <h1 className="text-4xl font-bold">Assessment Questions</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => setShowCreateSheet(true)}
        >
          Create Assessment Sheet
        </button>

        {assessments.map((assessment, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mt-4">
            <h2 className="text-2xl font-bold">{assessment.name}</h2>
            <p>Total Questions: {assessment.questions.length}</p>
            <div className="flex space-x-4 mt-2">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handlePost(index)}
              >
                Post
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleView(index)}
              >
                View
              </button>
            </div>
          </div>
        ))}

        {showCreateSheet && (
          <CreateAssessmentSheet
            onClose={() => setShowCreateSheet(false)}
            onCreate={handleCreateSheet}
          />
        )}

        {showQuestionsForm && (
          <QuestionsForm
            assessment={currentAssessment}
            onClose={() => {
              setShowQuestionsForm(false);
              setCurrentIndex(null);
            }}
            onSave={handleSaveQuestions}
          />
        )}

        {showViewAssessment && (
          <ViewAssessment
            assessment={currentAssessment}
            onClose={() => setShowViewAssessment(false)}
          />
        )}
      </div>
    </div>
  );
}

export default AdminAptitudeQuestions;
