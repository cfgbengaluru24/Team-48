import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/admin/home" className="hover:bg-gray-700 p-2 rounded">Home</Link>
        <Link to="/admin/aptitude-questions" className="hover:bg-gray-700 p-2 rounded">Aptitude Questions</Link>
        <Link to="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">Marks Dashboard</Link>
        <button onClick={handleLogout} className="hover:bg-gray-700 p-2 rounded">Logout</button>
      </nav>
    </div>
  ); 
}

export default AdminSidebar;
