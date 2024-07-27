

// import React from 'react';
// import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
// import { Bar, Pie } from 'react-chartjs-2';
// import AdminSidebar from './AdminSideBar.jsx';


// // Register the necessary Chart.js components
// Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// // Sample data for students' attendance and marks
// const students = [
//   { id: 1, name: 'John Doe', attendance: 'Present', marks: 85 },
//   { id: 2, name: 'Jane Smith', attendance: 'Absent', marks: 92 },
//   { id: 3, name: 'Sam Wilson', attendance: 'Present', marks: 78 },
//   { id: 4, name: 'Alex Johnson', attendance: 'Present', marks: 88 },
//   { id: 5, name: 'Emma Brown', attendance: 'Absent', marks: 90 },
// ];

// // Prepare data for the charts
// const attendanceData = {
//   labels: ['Present', 'Absent'],
//   datasets: [
//     {
//       label: 'Attendance',
//       data: [
//         students.filter((student) => student.attendance === 'Present').length,
//         students.filter((student) => student.attendance === 'Absent').length,
//       ],
//       backgroundColor: ['#34D399', '#F87171'], // Tailwind green and red
//     },
//   ],
// };

// const marksData = {
//   labels: students.map((student) => student.name),
//   datasets: [
//     {
//       label: 'Marks',
//       data: students.map((student) => student.marks),
//       backgroundColor: '#60A5FA', // Tailwind blue
//     },
//   ],
// };

// const AdminDashboard = () => {
//   return (

//     <div className="max-w-6xl mx-auto p-8 bg-gray-100">
//       {/* <AdminSidebar /> */}

//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Attendance Pie Chart */}
//         <div className="bg-white p-6 shadow-lg rounded-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Attendance Overview</h2>
//           <Pie data={attendanceData} />
//         </div>

//         {/* Marks Bar Chart */}
//         <div className="bg-white p-6 shadow-lg rounded-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Student Marks</h2>
//           <Bar data={marksData} />
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {students.map((student) => (
//             <div key={student.id} className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
//               <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
//               <p className={`text-sm font-medium mt-2 ${student.attendance === 'Present' ? 'text-green-600' : 'text-red-600'}`}>
//                 Attendance: {student.attendance}
//               </p>
//               <p className="text-sm text-gray-600 mt-1">Marks: {student.marks}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from 'react';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import AdminSidebar from './AdminSideBar.jsx';

// Register the necessary Chart.js components
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Sample data for students' attendance and marks
const students = [
  { id: 1, name: 'John Doe', attendance: 'Present', marks: 85 },
  { id: 2, name: 'Jane Smith', attendance: 'Absent', marks: 92 },
  { id: 3, name: 'Sam Wilson', attendance: 'Present', marks: 78 },
  { id: 4, name: 'Alex Johnson', attendance: 'Present', marks: 88 },
  { id: 5, name: 'Emma Brown', attendance: 'Absent', marks: 90 },
];

// Prepare data for the charts
const attendanceData = {
  labels: ['Present', 'Absent'],
  datasets: [
    {
      label: 'Attendance',
      data: [
        students.filter((student) => student.attendance === 'Present').length,
        students.filter((student) => student.attendance === 'Absent').length,
      ],
      backgroundColor: ['#34D399', '#F87171'], // Tailwind green and red
    },
  ],
};

const marksData = {
  labels: students.map((student) => student.name),
  datasets: [
    {
      label: 'Marks',
      data: students.map((student) => student.marks),
      backgroundColor: '#60A5FA', // Tailwind blue
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow max-w-6xl mx-auto p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Attendance Pie Chart */}
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Attendance Overview</h2>
            <Pie data={attendanceData} />
          </div>

          {/* Marks Bar Chart */}
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Student Marks</h2>
            <Bar data={marksData} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <div key={student.id} className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                <p className={`text-sm font-medium mt-2 ${student.attendance === 'Present' ? 'text-green-600' : 'text-red-600'}`}>
                  Attendance: {student.attendance}
                </p>
                <p className="text-sm text-gray-600 mt-1">Marks: {student.marks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
