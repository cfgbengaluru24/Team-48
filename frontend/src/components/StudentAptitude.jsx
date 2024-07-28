import React, { useState, useEffect } from 'react';
import StudentLayout from './StudentLayout';
import data from './aptitude.data.json';
import ActiveTests from './ActiveTests';
import SubmittedTests from './SubmittedTests';

function StudentAptitudeQuestions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes (300 seconds)

  useEffect(() => {
    // Simulate fetching data from JSON file
    setQuestions(data);

    // Retrieve saved answers from local storage
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }

    // Start timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [questionId]: selectedOption,
      };

      // Save new answers to local storage
      localStorage.setItem('answers', JSON.stringify(newAnswers));

      return newAnswers;
    });
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    // Save answers to local storage
    localStorage.setItem('answers', JSON.stringify(answers));
    console.log('Selected Answers:', answers);
    alert('Time is up! Your answers have been submitted.');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex">
      {/* <AdminSidebar /> */}
      <StudentLayout />
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Aptitude Assessment</h1>
            <div className="text-2xl font-semibold text-red-600">{formatTime(timeLeft)}</div>
          </div>
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div key={question.id} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{question.question}</h2>
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleOptionChange(question.id, option)}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-lg text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            ))}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentAptitudeQuestions;

// import React, { useState, useEffect } from 'react';
// import StudentLayout from './StudentLayout';

// function StudentAptitudeQuestions() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes (300 seconds)

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/questions/questions');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setQuestions(data);
//       } catch (error) {
//         console.error('Failed to fetch questions:', error);
//       }
//     };

//     fetchQuestions();

//     // Retrieve saved answers from local storage
//     const savedAnswers = localStorage.getItem('answers');
//     if (savedAnswers) {
//       setAnswers(JSON.parse(savedAnswers));
//     }

//     // Start timer
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timer);
//           handleSubmit();
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleOptionChange = (questionId, selectedOption) => {
//     setAnswers((prevAnswers) => {
//       const newAnswers = {
//         ...prevAnswers,
//         [questionId]: selectedOption,
//       };

//       // Save new answers to local storage
//       localStorage.setItem('answers', JSON.stringify(newAnswers));

//       return newAnswers;
//     });
//   };

//   const handleSubmit = (e) => {
//     if (e) {
//       e.preventDefault();
//     }
//     // Save answers to local storage
//     localStorage.setItem('answers', JSON.stringify(answers));
//     console.log('Selected Answers:', answers);
//     alert('Time is up! Your answers have been submitted.');
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div className="flex">
//       <StudentLayout />
//       <div className="flex-1 p-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-4xl font-bold">Aptitude Assessment</h1>
//             <div className="text-2xl font-semibold text-red-600">{formatTime(timeLeft)}</div>
//           </div>
//           <form onSubmit={handleSubmit}>
//             {questions.map((question) => (
//               <div key={question._id} className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4">{question.questionText}</h2>
//                 {question.options.map((option, index) => (
//                   <div key={index} className="flex items-center mb-2">
//                     <input
//                       type="radio"
//                       name={`question-${question._id}`}
//                       value={option}
//                       checked={answers[question._id] === option}
//                       onChange={() => handleOptionChange(question._id, option)}
//                       className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                     />
//                     <label className="ml-2 text-lg text-gray-700">{option}</label>
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentAptitudeQuestions;

