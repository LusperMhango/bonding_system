import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/verification/bondstatus',
  
  headers: {
    'Content-Type': 'application/json',
  },
});

function LandingPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null); // Track errors
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleLanding = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    setIsLoading(true); // Start loading

    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('accessToken');

      if (!token) {
        throw new Error('User is not logged in. Token is missing.');
      }

      // Make GET API call with Authorization header
      const response = await api.get('/verification/bondstatus', {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the Bearer token
        },
      });

      // Check the response and navigate
      if (response.data === 'verified') {
        // Redirect the user to the personal page
        navigate('/personal');
      } else {
        throw new Error('Student bonding status could not be verified.');
      }
    } catch (err) {
      console.error('API request failed:', err);
      setError(err.message || 'Failed to verify bond status. Please try again.');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="transition-transform duration-700">
      <Navbar />
      <div className="flex justify-center w-full">
        <div className="flex flex-col min-h-screen w-full">
          <div className="flex-grow pt-20 px-4 bg-gray-200 text-center flex flex-col items-center w-full">
            <h1 className="font-sans text-2xl text-black mb-8 mt-10 shadow-xl font-bold">
              WELCOME TO STUDENT BONDING PROCESS
            </h1>

            <img
              src="shake.jpg"
              alt="Handshake illustration"
              className="mx-auto mb-6 h-96 w-96 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-full xl:w-96 rounded-3xl shadow-lg border-4 border-gray-300 hover:scale-105 hover:shadow-2xl transition-transform duration-300 mb-2 mt-2"
            />

            <div className="w-full h-px bg-gray-800 my-2"></div>
            <div className="w-2/3 h-px bg-gray-800 my-2"></div>

            <button
              onClick={handleLanding}
              className="bg-orange-400 text-black rounded-lg font-semibold text-sm px-10 py-2 mt-4 mb-4 hover:bg-orange-500"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? 'Loading...' : 'Start Bonding'}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <footer className="w-full p-0 text-center relative bottom-0 left-1/2 transform -translate-x-1/2 mb-16">
              <p className="text-gray-900 font-sans">@2024 Higher Education</p>
              <p className="text-gray-900 font-sans">Students' Grants & Loans Board</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
