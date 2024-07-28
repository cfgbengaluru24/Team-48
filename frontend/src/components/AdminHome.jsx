import React from 'react';
import AdminSidebar from './AdminSideBar.jsx';

function AdminHome() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Admin Home</h1>
        <p>Welcome to the admin home page.</p>
      </div>
    </div>
  );
}

export default AdminHome;
