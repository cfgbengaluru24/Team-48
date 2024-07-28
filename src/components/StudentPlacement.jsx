import React, { useState, useEffect } from 'react';
import StudentLayout from './StudentLayout';

// Placeholder function for fetching companies and students data
const fetchCompanies = async () => {
  return [
    { id: 1, name: 'Tech Corp', industry: 'Technology', jobRoles: ['Software Engineer', 'Data Scientist'] },
    { id: 2, name: 'Health Inc', industry: 'Healthcare', jobRoles: ['Bioinformatics Analyst', 'Healthcare Consultant'] },
    { id: 3, name: 'Finance Solutions', industry: 'Finance', jobRoles: ['Financial Analyst', 'Investment Banker'] },
  ];
};

const fetchStudents = async () => {
  return [
    { id: 1, name: 'John Doe', skills: ['JavaScript', 'React'], resume: sampleResumeJohn, github: 'johndoe', linkedin: 'john-doe' },
    { id: 2, name: 'Jane Smith', skills: ['Python', 'Data Analysis'], resume: sampleResumeJane, github: 'janesmith', linkedin: 'jane-smith' },
    { id: 3, name: 'Alice Johnson', skills: ['Java', 'Spring'], resume: sampleResumeAlice, github: 'alicejohnson', linkedin: 'alice-johnson' },
  ];
};

// Sample resumes
const sampleResumeJohn = `
  John Doe
  Email: john.doe@example.com
  LinkedIn: linkedin.com/in/johndoe

  Experience:
  - Software Engineer at Tech Corp (2019-2022)
    - Developed web applications using JavaScript, React, and Node.js.
    - Led a team of 5 developers to deliver projects on time.

  Skills:
  - JavaScript, React, Node.js, HTML, CSS
  - Git, Docker, Jenkins
`;

const sampleResumeJane = `
  Jane Smith
  Email: jane.smith@example.com
  LinkedIn: linkedin.com/in/janesmith

  Experience:
  - Data Analyst at DataCorp (2018-2021)
    - Analyzed data using Python and various data analysis libraries.
    - Created visualizations to present findings to stakeholders.

  Skills:
  - Python, Pandas, NumPy, Data Analysis
  - SQL, Tableau, Excel
`;

const sampleResumeAlice = `
  Alice Johnson
  Email: alice.johnson@example.com
  LinkedIn: linkedin.com/in/alicejohnson

  Experience:
  - Java Developer at Soft Solutions (2017-2022)
    - Developed enterprise applications using Java and Spring framework.
    - Integrated with various APIs and databases.

  Skills:
  - Java, Spring, Hibernate, SQL
  - REST APIs, Microservices, Agile methodologies
`;

// Sample job description
const jobDescription = `
  We are looking for a Software Engineer with experience in JavaScript, React, and Node.js. 
  Knowledge of HTML, CSS, and modern development tools like Git, Docker, and Jenkins is a plus.
`;

// Function to perform ATS scan
function atsScan(resume, jobDesc) {
  const resumeWords = resume.toLowerCase().split(/\W+/);
  const jobWords = jobDesc.toLowerCase().split(/\W+/);

  let keywordMatches = 0;
  let totalKeywords = jobWords.length;
  const matchedSkills = [];

  jobWords.forEach((word) => {
    if (resumeWords.includes(word)) {
      keywordMatches++;
      matchedSkills.push(word);
    }
  });

  const score = (keywordMatches / totalKeywords) * 100;

  return {
    keywordMatches,
    totalKeywords,
    score,
    matchedSkills,
  };
}

function StudentPlacement() {
  const [companies, setCompanies] = useState([]);
  const [students, setStudents] = useState([]);
  const [atsResults, setAtsResults] = useState({});
  const [showAtsResults, setShowAtsResults] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const companyData = await fetchCompanies();
      const studentData = await fetchStudents();
      setCompanies(companyData);
      setStudents(studentData);

      const results = {};
      studentData.forEach((student) => {
        results[student.id] = atsScan(student.resume, jobDescription);
      });
      setAtsResults(results);
    };

    loadData();
  }, []);

  const handleShowAtsResults = (studentId) => {
    setShowAtsResults((prevState) => ({
      ...prevState,
      [studentId]: !prevState[studentId],
    }));
  };

  return (
    <StudentLayout>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Placement Section</h1>
        <p className="text-lg mb-8 text-center">Manage placements and help students get matched with job opportunities.</p>

        <section className="mb-8 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Partner Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((company) => (
              <div key={company.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-gray-700">Industry: {company.industry}</p>
                <p className="text-gray-700">Job Roles: {company.jobRoles.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map((student) => (
              <div key={student.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                <p className="text-gray-700">Skills: {student.skills.join(', ')}</p>
                <a href="#" className="text-blue-500" onClick={() => alert('Resume viewing not implemented.')}>View Resume</a>
                <p className="text-gray-700">GitHub: <a href={`https://github.com/${student.github}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{student.github}</a></p>
                <p className="text-gray-700">LinkedIn: <a href={`https://linkedin.com/in/${student.linkedin}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{student.linkedin}</a></p>
                <div className="mt-4">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => handleShowAtsResults(student.id)}
                  >
                    {showAtsResults[student.id] ? 'Hide ATS Results' : 'Show ATS Results'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl mt-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">ATS Results</h2>
          {students.map((student) => (
            showAtsResults[student.id] && (
              <div key={student.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-bold mb-2 text-center">{student.name}</h3>
                <p className="text-gray-700 text-center"><strong>ATS Score:</strong> {atsResults[student.id]?.score.toFixed(2)}%</p>
                <p className="text-gray-700 text-center"><strong>Matched Skills:</strong> {atsResults[student.id]?.matchedSkills.join(', ')}</p>
              </div>
            )
          ))}
        </section>
      </div>
    </StudentLayout>
  );
}

export default StudentPlacement;
