import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./footer";


// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // Correct baseURL for the backend
  headers: {
    "Content-Type": "application/json",
  },
});

function LastPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null); // Track errors
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleLanding = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    setIsLoading(true); // Start loading

    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("User is not logged in. Token is missing.");
      }

      // Make GET API call with Authorization header
      const response = await api.get("/verification/bondstatus", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the Bearer token
        },
      });

      // Check the response data
      if (response.data.startsWith("student")) {
        // Redirect the user if bonding is allowed
        navigate("/personal");
      } else {
        throw new Error(response.data || "Bonding status verification failed.");
      }
    } catch (err) {
      console.error("API request failed:", err);
      setError(err.message || "Failed to verify bond status. Please try again.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 text-white">
      <Navbar />
      <main className="flex flex-col lg:flex-row items-center justify-between flex-grow max-w-6xl mx-auto px-6 lg:px-12 py-12 font-sans">
        {/* Text Section */}
        <div className="flex flex-col text-center lg:text-left max-w-lg">
          <h1 className="text-4xl font-extrabold leading-tight tracking-wide font-sans">
            CONGRATULATION YOU HAVE SUCCESFULLY SUBMIT THE BONDING FORM
          </h1>
          <p className="text-lg mt-4 font-medium">
            Ending the journey toward higher education with ease and assurance.
          </p>
          <div className="mt-8">
            <button
              onClick={handleLanding}
              className="px-6 py-2 mt-2 text-lg font-medium text-white bg-orange-500 rounded-lg shadow-lg hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 shadow-2xl"
               // Disable button while loading
            >
                End bonding
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:ml-8">
          <img
            src="celebration.jpg"
            alt="celebration illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </main>
      <div>
      <Footer/>
      </div>
      </div>
      
  );
}

export default LastPage;
