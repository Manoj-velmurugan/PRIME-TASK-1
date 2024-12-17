import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";  // Correct relative path
import Sidebar from "../components/Sidebar/sidebar";           // Correct relative path

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <HeroSection />
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <nav className="space-y-4">
          <Link
            to="/dashboard/home"
            className="block w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Home
          </Link>
          <Link
            to="/dashboard/your-quizzes"
            className="block w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Your Created Quizzes
          </Link>
          <Link
            to="/dashboard/profile"
            className="block w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Profile
          </Link>
          <Link
            to="/logout"
            className="block w-full bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700"
          >
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
}
