// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

// export default function Landing() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // Your login logic here
//     navigate('/dashboard/home');
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/src/assets/land_background.jpg')" }}
//     >
//       <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg backdrop-blur-md bg-opacity-30">
//         <h1 className="text-3xl font-bold text-center mb-6">Welcome to Quiz Maker</h1>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border border-gray-300 rounded"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export default function Landing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Your login logic here, e.g., API call
    navigate('/dashboard/home'); // Redirect to dashboard after successful login
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/land_background.jpg')" }}
    >
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg backdrop-blur-md bg-opacity-30">
        <h1 className="text-3xl font-bold text-center mb-6 text-black-600 font-roboto">Welcome to Quiz Maker</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition ease-in-out duration-150"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
