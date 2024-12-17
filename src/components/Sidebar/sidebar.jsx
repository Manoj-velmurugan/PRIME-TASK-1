// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <Link
          to="/dashboard/home"
          className="block w-full bg-blue-600 text-white rounded-lg px-4 py-2 mb-2 hover:bg-blue-700"
        >
          Home
        </Link>
        <Link
          to="/dashboard/your-quizzes"
          className="block w-full bg-blue-600 text-white rounded-lg px-4 py-2 mb-2 hover:bg-blue-700"
        >
          Your Created Quizzes
        </Link>
        <Link
          to="/dashboard/profile"
          className="block w-full bg-blue-600 text-white rounded-lg px-4 py-2 mb-2 hover:bg-blue-700"
        >
          Profile
        </Link>
        <Link
          to="/logout"
          className="block w-full bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
