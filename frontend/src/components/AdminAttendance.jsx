// import React, { useState, useEffect } from 'react';
// import AdminSidebar from './AdminSideBar.jsx';
// import data from './data.json';

// const AttendancePage = () => {
//   const [attendance, setAttendance] = useState({});
//   const [dates, setDates] = useState([]);

//   useEffect(() => {
//     // Initialize dates (e.g., past 7 days)
//     const today = new Date();
//     const pastDates = [];
//     for (let i = 6; i >= 0; i--) {
//       const date = new Date(today);
//       date.setDate(today.getDate() - i);
//       pastDates.push(date.toISOString().split('T')[0]); // Format YYYY-MM-DD
//     }
//     setDates(pastDates);

//     // Retrieve saved attendance data from local storage
//     const savedAttendance = localStorage.getItem('attendance');
//     if (savedAttendance) {
//       setAttendance(JSON.parse(savedAttendance));
//     }
//   }, []);

//   const handleAttendanceChange = (studentId, date) => {
//     setAttendance(prevAttendance => {
//       const newAttendance = {
//         ...prevAttendance,
//         [studentId]: {
//           ...prevAttendance[studentId],
//           [date]: {
//             ...prevAttendance[studentId]?.[date],
//             attendance: !prevAttendance[studentId]?.[date]?.attendance ? 1 : 0,
//           },
//         },
//       };

//       // Save new attendance to local storage
//       localStorage.setItem('attendance', JSON.stringify(newAttendance));

//       return newAttendance;
//     });
//   };

//   const handleRatingChange = (studentId, date, rating) => {
//     setAttendance(prevAttendance => {
//       const newAttendance = {
//         ...prevAttendance,
//         [studentId]: {
//           ...prevAttendance[studentId],
//           [date]: {
//             ...prevAttendance[studentId]?.[date],
//             rating: rating,
//           },
//         },
//       };

//       // Save new attendance to local storage
//       localStorage.setItem('attendance', JSON.stringify(newAttendance));

//       return newAttendance;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save attendance data to local storage
//     localStorage.setItem('attendance', JSON.stringify(attendance));
//     console.log('Attendance Data:', attendance);
//   };

//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <div className="p-8">
//         <h1 className="text-4xl font-bold mb-4">Attendance Entry</h1>
//         <form onSubmit={handleSubmit}>
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Student ID</th>
//                 {dates.map(date => (
//                   <th key={date} className="py-2 px-4 border-b">{date}</th>
//                 ))}
//                 <th className="py-2 px-4 border-b">Family Rating</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.students.map(student => (
//                 <tr key={student.id}>
//                   <td className="py-2 px-4 border-b">{student.id}</td>
//                   {dates.map(date => (
//                     <td key={date} className="py-2 px-4 border-b text-center">
//                       <input
//                         type="checkbox"
//                         checked={attendance[student.id]?.[date]?.attendance === 1}
//                         onChange={() => handleAttendanceChange(student.id, date)}
//                       />
//                     </td>
//                   ))}
//                   <td className="py-2 px-4 border-b text-center">
//                     <input
//                       type="number"
//                       min="1"
//                       max="10"
//                       value={attendance[student.id]?.[dates[0]]?.rating || ''}
//                       onChange={(e) => handleRatingChange(student.id, dates[0], parseInt(e.target.value))}
//                       className="w-16 text-center"
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//             Save Attendance
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AttendancePage;
import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSideBar.jsx';
import data from './data.json';

const AttendancePage = () => {
  const [attendance, setAttendance] = useState({});
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // Initialize dates (e.g., past 7 days)
    const today = new Date();
    const pastDates = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      pastDates.push(date.toISOString().split('T')[0]); // Format YYYY-MM-DD
    }
    setDates(pastDates);

    // Retrieve saved attendance data from local storage
    const savedAttendance = localStorage.getItem('attendance');
    if (savedAttendance) {
      setAttendance(JSON.parse(savedAttendance));
    }
  }, []);

  const handleAttendanceChange = (studentId, date) => {
    setAttendance(prevAttendance => {
      const newAttendance = {
        ...prevAttendance,
        [studentId]: {
          ...prevAttendance[studentId],
          [date]: {
            attendance: !prevAttendance[studentId]?.[date]?.attendance ? 1 : 0,
          },
        },
      };

      // Save new attendance to local storage
      localStorage.setItem('attendance', JSON.stringify(newAttendance));

      return newAttendance;
    });
  };

  const handleRatingChange = (studentId, rating) => {
    setAttendance(prevAttendance => {
      const newAttendance = {
        ...prevAttendance,
        [studentId]: {
          ...prevAttendance[studentId],
          rating: rating,
        },
      };

      // Save new attendance to local storage
      localStorage.setItem('attendance', JSON.stringify(newAttendance));

      return newAttendance;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save attendance data to local storage
    localStorage.setItem('attendance', JSON.stringify(attendance));
    console.log('Attendance Data:', attendance);
  };

  const handleReset = () => {
    // Clear attendance for the current view, not entire localStorage
    const newAttendance = {};
    localStorage.setItem('attendance', JSON.stringify(newAttendance));
    setAttendance(newAttendance);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Attendance Entry</h1>
        <form onSubmit={handleSubmit}>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Student ID</th>
                {dates.map(date => (
                  <th key={date} className="py-2 px-4 border-b">{date}</th>
                ))}
                <th className="py-2 px-4 border-b">Family Rating</th>
              </tr>
            </thead>
            <tbody>
              {data.students.map(student => (
                <tr key={student.id}>
                  <td className="py-2 px-4 border-b">{student.id}</td>
                  {dates.map(date => (
                    <td key={date} className="py-2 px-4 border-b text-center">
                      <input
                        type="checkbox"
                        checked={attendance[student.id]?.[date]?.attendance === 1}
                        onChange={() => handleAttendanceChange(student.id, date)}
                      />
                    </td>
                  ))}
                  <td className="py-2 px-4 border-b text-center">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={attendance[student.id]?.rating || ''}
                      onChange={(e) => handleRatingChange(student.id, parseInt(e.target.value))}
                      className="w-16 text-center"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Save Attendance
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-4"
          >
            Reset Attendance
          </button>
        </form>
      </div>
    </div>
  );
};

export default AttendancePage;
