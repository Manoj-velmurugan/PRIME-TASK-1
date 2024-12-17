import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateQuiz() {
  const [quizName, setQuizName] = useState('');
  const navigate = useNavigate();

  const handleCreateQuiz = async (e) => {
    e.preventDefault();
    // Logic to handle quiz creation
    navigate('/dashboard/home');
  };

  return (
    <div className="p-8 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create a New Quiz</h1>
        <form onSubmit={handleCreateQuiz} className="space-y-4">
          <div>
            <label className="block text-gray-700">Quiz Name</label>
            <input
              type="text"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              placeholder="Enter quiz name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700">
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
