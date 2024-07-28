import React, { useState, useEffect } from 'react';
import StudentLayout from './StudentLayout';
import ActiveTests from './ActiveTests';
import SubmittedTests from './SubmittedTests';

function StudentAptitude() {
  const [activeTests, setActiveTests] = useState([]);
  const [submittedTests, setSubmittedTests] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchTests = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setActiveTests(data["active-tests"]);
      setSubmittedTests(data["submitted-tests"]);
    };
    fetchTests();
  }, []);

  return (
    <StudentLayout>
      <h1 className="text-4xl font-bold mb-4">Aptitude Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActiveTests tests={activeTests} />
        <SubmittedTests tests={submittedTests} />
      </div>
    </StudentLayout>
  );
}

export default StudentAptitude;
