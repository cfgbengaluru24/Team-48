import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="bg-blue-800 text-white w-64 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Portal</h2>
      <ul>
        <li className="mb-4">
          <Link to="/admin/home" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/aptitude-questions" className="text-white hover:text-gray-300">
            Aptitude Questions
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/marks-dashboard" className="text-white hover:text-gray-300">
            Marks Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/placement-portal" className="text-white hover:text-gray-300">
            Placement Portal
          </Link>
        </li>
        <li>
          <Link to="/logout" className="text-white hover:text-gray-300">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  ); 
}

export default AdminSidebar;
