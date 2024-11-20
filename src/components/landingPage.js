
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // Correct baseURL for the backend
  headers: {
    "Content-Type": "application/json",
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col justify-center items-center flex-grow">
        {/* Title Section */}
        <div className="text-center mb-12">
          {/* Added margin-bottom */}
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
            Welcome to the Student Bonding Process
          </h1>
          <p className="text-gray-600 mt-2">
            Join us in creating a better future through higher education.
          </p>
        </div>

        {/* Illustration */}
        <div className="relative">
          <img
            src="shake.jpg"
            alt="Handshake illustration"
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-xl shadow-lg border border-gray-300 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-6">
          <button
            onClick={handleLanding}
            className="px-8 py-3 text-lg font-medium text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-300"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Processing..." : "Start Bonding"}
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
          )}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-gray-300 text-sm">
          &copy; 2024 Higher Education Students' Grants & Loans Board
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
