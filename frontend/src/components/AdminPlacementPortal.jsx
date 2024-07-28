// import React, { useState, useEffect } from 'react';
// import AdminSidebar from './AdminSideBar.jsx';

// // Sample resumes
// const sampleResumeJohn = `
//   John Doe
//   Email: john.doe@example.com
//   LinkedIn: linkedin.com/in/johndoe

//   Experience:
//   - Software Engineer at Tech Corp (2019-2022)
//     - Developed web applications using JavaScript, React, and Node.js.
//     - Led a team of 5 developers to deliver projects on time.

//   Skills:
//   - JavaScript, React, Node.js, HTML, CSS
//   - Git, Docker, Jenkins
// `;

// const sampleResumeJane = `
//   Jane Smith
//   Email: jane.smith@example.com
//   LinkedIn: linkedin.com/in/janesmith

//   Experience:
//   - Data Analyst at DataCorp (2018-2021)
//     - Analyzed data using Python and various data analysis libraries.
//     - Created visualizations to present findings to stakeholders.

//   Skills:
//   - Python, Pandas, NumPy, Data Analysis
//   - SQL, Tableau, Excel
// `;

// const sampleResumeAlice = `
//   Alice Johnson
//   Email: alice.johnson@example.com
//   LinkedIn: linkedin.com/in/alicejohnson

//   Experience:
//   - Java Developer at Soft Solutions (2017-2022)
//     - Developed enterprise applications using Java and Spring framework.
//     - Integrated with various APIs and databases.

//   Skills:
//   - Java, Spring, Hibernate, SQL
//   - REST APIs, Microservices, Agile methodologies
// `;

// // Sample job description
// const jobDescription = `
//   We are looking for a Software Engineer with experience in JavaScript, React, and Node.js. 
//   Knowledge of HTML, CSS, and modern development tools like Git, Docker, and Jenkins is a plus.
// `;

// // Function to perform ATS scan
// function atsScan(resume, jobDesc) {
//   const resumeWords = resume.toLowerCase().split(/\W+/);
//   const jobWords = jobDesc.toLowerCase().split(/\W+/);

//   let keywordMatches = 0;
//   let totalKeywords = jobWords.length;
//   const matchedSkills = [];

//   jobWords.forEach((word) => {
//     if (resumeWords.includes(word)) {
//       keywordMatches++;
//       matchedSkills.push(word);
//     }
//   });

//   const score = (keywordMatches / totalKeywords) * 100;

//   return {
//     keywordMatches,
//     totalKeywords,
//     score,
//     matchedSkills,
//   };
// }

// // Sample function for fetching companies and students data
// const fetchCompanies = async () => {
//   return [
//     { id: 1, name: 'Tech Corp', industry: 'Technology', jobRoles: ['Software Engineer', 'Data Scientist'] },
//     { id: 2, name: 'Health Inc', industry: 'Healthcare', jobRoles: ['Bioinformatics Analyst', 'Healthcare Consultant'] },
//     { id: 3, name: 'Finance Solutions', industry: 'Finance', jobRoles: ['Financial Analyst', 'Investment Banker'] },
//   ];
// };

// const fetchStudents = async () => {
//   return [
//     { id: 1, name: 'John Doe', skills: ['JavaScript', 'React'], resume: sampleResumeJohn, github: 'johndoe', linkedin: 'john-doe' },
//     { id: 2, name: 'Jane Smith', skills: ['Python', 'Data Analysis'], resume: sampleResumeJane, github: 'janesmith', linkedin: 'jane-smith' },
//     { id: 3, name: 'Alice Johnson', skills: ['Java', 'Spring'], resume: sampleResumeAlice, github: 'alicejohnson', linkedin: 'alice-johnson' },
//   ];
// };

// function AdminPlacementPortal() {
//   const [companies, setCompanies] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [showATSResults, setShowATSResults] = useState(false);

//   useEffect(() => {
//     const loadData = async () => {
//       const companyData = await fetchCompanies();
//       const studentData = await fetchStudents();

//       setCompanies(companyData);

//       const results = studentData.map(student => ({
//         ...student,
//         atsResult: atsScan(student.resume, jobDescription)
//       }));

//       setStudents(results);
//       const qualifiedStudents = results.filter(student => student.atsResult.score >= 70);
//       setFilteredStudents(qualifiedStudents);
//     };

//     loadData();
//   }, []);

//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <div className="p-8 w-full">
//         <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Admin Placement Portal</h1>
        
//         <section className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Partner Companies</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {companies.map((company) => (
//               <div key={company.id} className="bg-white p-4 rounded-lg shadow-md text-center">
//                 <h3 className="text-xl font-bold mb-2">{company.name}</h3>
//                 <p className="text-gray-700">Industry: {company.industry}</p>
//                 <p className="text-gray-700">Job Roles: {company.jobRoles.join(', ')}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Qualified Students</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredStudents.map((student) => (
//               <div key={student.id} className="bg-white p-4 rounded-lg shadow-md text-center">
//                 <h3 className="text-xl font-bold mb-2">{student.name}</h3>
//                 <p className="text-gray-700">Skills: {student.skills.join(', ')}</p>
//                 <p className="text-gray-700">GitHub: <a href={`https://github.com/${student.github}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{student.github}</a></p>
//                 <p className="text-gray-700">LinkedIn: <a href={`https://linkedin.com/in/${student.linkedin}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{student.linkedin}</a></p>
//                 <button 
//                   onClick={() => setShowATSResults(!showATSResults)} 
//                   className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
//                 >
//                   {showATSResults ? 'Hide ATS Scores' : 'Show ATS Scores'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {showATSResults && (
//           <section className="mt-8">
//             <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">ATS Scan Results</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filteredStudents.map((student) => (
//                 <div key={student.id} className="bg-white p-4 rounded-lg shadow-md text-center">
//                   <h3 className="text-xl font-bold mb-2">{student.name}</h3>
//                   <p className="text-gray-700"><strong>ATS Score:</strong> {student.atsResult.score.toFixed(2)}%</p>
//                   <p className="text-gray-700"><strong>Matched Skills:</strong> {student.atsResult.matchedSkills.join(', ')}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminPlacementPortal;














import React, { useState } from 'react';
import AdminSidebar from './AdminSideBar.jsx';

// Static data for companies
const companies = [
  { id: 1, name: 'Tech Corp', industry: 'Technology', jobRoles: ['Software Engineer', 'Data Scientist'] },
  { id: 2, name: 'Health Inc', industry: 'Healthcare', jobRoles: ['Bioinformatics Analyst', 'Healthcare Consultant'] },
  { id: 3, name: 'Finance Solutions', industry: 'Finance', jobRoles: ['Financial Analyst', 'Investment Banker'] },
];

// Static data for qualified students
const students = [
  {
    id: 1,
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    github: 'johndoe',
    linkedin: 'john-doe',
    atsResult: { score: 85, matchedSkills: ['javascript', 'react', 'node.js', 'html', 'css'] },
    resume: 'https://example.com/johndoe_resume.pdf',
  },
  {
    id: 2,
    name: 'Jane Smith',
    skills: ['Python', 'Data Analysis', 'SQL', 'Tableau', 'Excel'],
    github: 'janesmith',
    linkedin: 'jane-smith',
    atsResult: { score: 90, matchedSkills: ['python', 'data', 'analysis', 'sql', 'tableau', 'excel'] },
    resume: 'https://example.com/janesmith_resume.pdf',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    skills: ['Java', 'Spring', 'Hibernate', 'SQL', 'Microservices'],
    github: 'alicejohnson',
    linkedin: 'alice-johnson',
    atsResult: { score: 88, matchedSkills: ['java', 'spring', 'hibernate', 'sql', 'microservices'] },
    resume: 'https://example.com/alicejohnson_resume.pdf',
  },
];

function AdminPlacementPortal() {
  const [showATSResults, setShowATSResults] = useState(false);

  // Filter students with ATS score above 75 and sort them by score in descending order
  const qualifiedStudents = students.filter(student => student.atsResult.score > 75)
                                     .sort((a, b) => b.atsResult.score - a.atsResult.score);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-8 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Admin Placement Portal</h1>
        
        <section className="mb-8">
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

        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Qualified Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualifiedStudents.map((student) => (
              <div key={student.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                <p className="text-gray-700">Skills: {student.skills.join(', ')}</p>
                <p className="text-gray-700">
                  GitHub: <a href={`https://github.com/${student.github}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{student.github}</a>
                </p>
                <p className="text-gray-700">
                  LinkedIn: <a href={`https://linkedin.com/in/${student.linkedin}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{student.linkedin}</a>
                </p>
                <p className="text-gray-700">
                  Resume: <a href={student.resume} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Resume</a>
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-8">
          <button 
            onClick={() => setShowATSResults(!showATSResults)} 
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {showATSResults ? 'Hide ATS Scores' : 'Show ATS Scores'}
          </button>
        </div>

        {showATSResults && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">ATS Scan Results</h2>
            <div className="flex flex-col items-center">
              {qualifiedStudents.map((student) => (
                <div key={student.id} className="bg-white p-4 m-2 rounded-lg shadow-md text-center w-full md:w-1/2 lg:w-1/3">
                  <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                  <p className="text-gray-700"><strong>ATS Score:</strong> {student.atsResult.score}%</p>
                  <p className="text-gray-700"><strong>Matched Skills:</strong> {student.atsResult.matchedSkills.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default AdminPlacementPortal;
