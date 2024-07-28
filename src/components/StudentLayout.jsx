import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function StudentLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="py-4 px-6 text-2xl font-bold bg-blue-900">Student Portal</div>
        <nav className="flex flex-col mt-4">
          <Link to="/student/home" className="py-2 px-6 hover:bg-blue-700">Home</Link>
          <Link to="/student/aptitude" className="py-2 px-6 hover:bg-blue-700">Aptitude</Link>
          <Link to="/student/placement" className="py-2 px-6 hover:bg-blue-700">Placement</Link>
          <Link to="/student/portal" className="py-2 px-6 hover:bg-blue-700">Portal</Link>
          <Link to="/student/forum" className="py-2 px-6 hover:bg-blue-700">Forum</Link>
          <button onClick={handleLogout} className="py-2 px-6 mt-auto hover:bg-blue-700">Logout</button>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}

export default StudentLayout;
