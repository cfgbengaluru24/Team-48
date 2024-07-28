import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSideBar.jsx";

const AdminPortal = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/query/all");
        const data = response.data.data.map(query => ({
          ...query,
        }));
        setQueries(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Query Management
        </h1>

        <section className="overflow-y-scroll max-h-[300px]">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Unsolved Queries
          </h2>
          <ul className="space-y-4">
            {queries
              .filter((query) => !query.status)
              .map((query) => (
                <li
                  key={query.id}
                  className="flex justify-between items-center p-4 bg-red-100 border border-red-300 rounded-md"
                >
                  <span className="font-medium text-gray-900">{query.heading}</span>
                  <span className="text-sm text-gray-600">{query.query}</span>
                </li>
              ))}
          </ul>
        </section>

        <section className="mt-8 overflow-y-scroll max-h-[300px]">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Solved Queries
          </h2>
          <ul className="space-y-4">
            {queries
              .filter((query) => query.status)
              .map((query) => (
                <li
                  key={query.id}
                  className="flex justify-between items-center p-4 bg-green-100 border border-green-300 rounded-md"
                >
                  <span className="font-medium text-gray-900">{query.heading}</span>
                  <span className="text-sm text-gray-600">{query.query}</span>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminPortal;
