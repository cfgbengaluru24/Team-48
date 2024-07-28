// import React from 'react';
// import AdminSidebar from './AdminSideBar.jsx';

// function AdminHome() {
//   return (
//     <div className="flex">
//       <AdminSidebar />
//       <div className="p-8">
//         <h1 className="text-4xl font-bold">Admin Home</h1>
//         <p>Welcome to the admin home page.</p>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;

import React from 'react';
import AdminSidebar from './AdminSideBar.jsx';

function AdminHome() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-lg mb-8">Welcome to the admin home page. Here you can find an overview of the system, recent activities, and quick access links.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Total Users</h2>
              <p className="text-xl">1,234</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Active Sessions</h2>
              <p className="text-xl">456</p>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">New Registrations</h2>
              <p className="text-xl">78</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">User <strong>priya </strong> completed the <strong>Aptitude Test</strong>.</li>
              <li className="mb-2">New user <strong>jaya</strong> registered.</li>
              <li className="mb-2">System update applied on <strong>March 15, 2024</strong>.</li>
              <li className="mb-2">User <strong>Sania</strong> started a new session.</li>
            </ul>
          </div>

          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/dashboard" className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-blue-600 transition duration-300">View Dashboard</a>
              <a href="/aptitude-questions" className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-green-600 transition duration-300">Manage Aptitude Questions</a>
              <a href="/user-management" className="bg-yellow-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-yellow-600 transition duration-300">User Management</a>
              <a href="/settings" className="bg-red-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-red-600 transition duration-300">Settings</a>
            </div> */}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default AdminHome;
