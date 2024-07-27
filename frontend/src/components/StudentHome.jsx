// import React from 'react';
// import StudentLayout from './StudentLayout';

// function StudentHome() {
//   return (
//     <StudentLayout>
//       <h1 className="text-4xl font-bold mb-4">Welcome to the Student Portal</h1>
//       <p className="text-lg mb-8">This is the student home page. Here you can navigate to different sections using the sidebar.</p>
//     </StudentLayout>
//   );
// }

// export default StudentHome;

import React from 'react';
import StudentLayout from './StudentLayout';

function StudentHome() {
  return (
    <StudentLayout>
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
    </StudentLayout>
  );
}

export default StudentHome;
