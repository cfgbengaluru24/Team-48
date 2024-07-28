import React, { useState } from 'react';
import StudentLayout from './StudentLayout';
import axios from 'axios';

function StudentHome() {
  const [showModal, setShowModal] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    address: '',
    phone: '',
    email: '',
    github_link: '',
    linkedin_profile: '',
    resume: null,
    resumeURL: '',
    resumeName: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      const fileURL = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
        resumeURL: fileURL,
        resumeName: file.name,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setShowModal(false);
    console.log(formData);

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.patch('http://localhost:5000/api/students/update', formDataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Data saved:', response.data);
      setShowProfile(true);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleEdit = () => {
    setShowProfile(false);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <StudentLayout>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-screen overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">Enter Your Details</h3>
            <form onSubmit={handleSubmit}>
              {['name', 'college', 'address', 'phone', 'email', 'github_link', 'linkedin_profile'].map((field) => (
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block text-gray-700 font-bold mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
              ))}
              <div className="mb-4">
                <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">
                  Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  accept=".pdf,.doc,.docx"
                  required={!formData.resume}
                />
                {formData.resume && <p className="text-gray-600 mt-2">Uploaded: {formData.resumeName}</p>}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCancel}
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
      )}
      {!showModal && (
        <>
          <div className="flex justify-end mt-4 mr-4">
            <button
              onClick={() => setShowProfile(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Profile
            </button>
          </div>
          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h1 className="text-4xl font-bold mb-4" style={{ fontSize: '36px', color: '#1d4ed8', textAlign: 'center' }}>Welcome to the Student Portal</h1>
            <p className="text-lg mb-8" style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center' }}>
              This page enables students to stay updated with the latest announcements regarding attendance and marks.
              Here you can find visual representations of your performance and other important updates.
            </p>
            
            <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '28px', color: '#1d4ed8' }}>Latest Announcements</h2>
              <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
                <li>Check your attendance and mark updates regularly.</li>
                <li>View your performance graphs to track your progress.</li>
                <li>Stay informed about upcoming exams and important dates.</li>
              </ul>
            </section>

            <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '28px', color: '#1d4ed8' }}>Your Performance</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Visualize your attendance and marks in the form of interactive graphs. Stay on top of your academic performance and identify areas for improvement.
              </p>
            </section>

            <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '28px', color: '#1d4ed8' }}>Get Support</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                If you have any questions or need assistance, feel raise your problems in the issues portal. We are here to help you succeed.
              </p>
            </section>
          </div>
        </>
      )}
      {showProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-screen overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">Your Details</h3>
            <div className="text-left space-y-2">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>College:</strong> {formData.college}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>GitHub:</strong> <a href={formData.github_link} target="_blank" rel="noopener noreferrer">{formData.github_link}</a></p>
              <p><strong>LinkedIn:</strong> <a href={formData.linkedin_profile} target="_blank" rel="noopener noreferrer">{formData.linkedin_profile}</a></p>
              {formData.resume && (
                <div>
                  <strong>Resume:</strong>
                  <button
                    onClick={() => window.open(formData.resumeURL, '_blank')}
                    className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-lg"
                  >
                    View Resume
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => setShowProfile(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </StudentLayout>
  );
}

export default StudentHome;
