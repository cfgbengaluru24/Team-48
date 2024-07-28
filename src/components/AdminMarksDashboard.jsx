import React from 'react';
import AdminSidebar from './AdminSideBar.jsx';

function AdminMarksDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Marks Dashboard</h1>
        <p>View and manage marks here.</p>
      </div>
    </div>
  );
}

export default AdminMarksDashboard;
