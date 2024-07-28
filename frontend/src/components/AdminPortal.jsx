import React from "react";
import AdminSidebar from "./AdminSideBar";
// Sample data representing queries
const queries = [
  {
    id: 1,
    title: "Why is my code not running?",
    solved: false,
    fileName: "error_log.txt",
  },
  {
    id: 2,
    title: "How to update Node.js?",
    solved: true,
    fileName: "update_guide.pdf",
  },
  {
    id: 3,
    title: "What is REST API?",
    solved: false,
    fileName: "api_overview.docx",
  },
  {
    id: 4,
    title: "Difference between JS and Java?",
    solved: true,
    fileName: "comparison_chart.xls",
  },
  {
    id: 5,
    title: "How to setup MongoDB?",
    solved: false,
    fileName: "mongodb_setup.doc",
  },
];

const AdminPortal = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Admin Query Management
      </h1>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Unsolved Queries
        </h2>
        <ul className="space-y-4">
          {queries
            .filter((query) => !query.solved)
            .map((query) => (
              <li
                key={query.id}
                className="flex justify-between items-center p-4 bg-red-100 border border-red-300 rounded-md"
              >
                <span className="font-medium text-gray-900">{query.title}</span>
                <span className="text-sm text-gray-600">{query.fileName}</span>
              </li>
            ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Solved Queries
        </h2>
        <ul className="space-y-4">
          {queries
            .filter((query) => query.solved)
            .map((query) => (
              <li
                key={query.id}
                className="flex justify-between items-center p-4 bg-green-100 border border-green-300 rounded-md"
              >
                <span className="font-medium text-gray-900">{query.title}</span>
                <span className="text-sm text-gray-600">{query.fileName}</span>
              </li>
            ))}
        </ul>
      </section>
    </div>
    </div>
  );
};

export default AdminPortal;
