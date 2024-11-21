import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const ApprovedLoanDetails = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-300 font-sans">
        <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg ">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          LOAN AMOUNT FORM
          </h2>
          <p className="text-center text-gray-600 mb-8">
          Please provide accurate banking details for bonding.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="tuition" className="block text-gray-700 font-medium mb-2">
                Tuition
              </label>
              <select
                id="tuition"
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
                required
              >
                <option value="">Select Tuition Amount</option>
                <option value="full">MWK 650,000</option>
                <option value="partial">MWK 325,000</option>
                <option value="none">None</option>
              </select>
            </div>
            <div>
              <label htmlFor="upkeep" className="block text-gray-700 font-medium mb-2">
                Upkeep
              </label>
              <select
                id="upkeep"
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
                required
              >
                <option value="">Select Upkeep Amount</option>
                <option value="full">MWK 590,000</option>
                <option value="partial">MWK 270,000</option>
                <option value="none">None</option>
              </select>
            </div>
            <div>
              <label htmlFor="totalAmount" className="block text-gray-700 font-medium mb-2">
                Total Amount
              </label>
              <select
                id="totalAmount"
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
                required
              >
                <option value="">Select Total Amount</option>
                <option value="full">MWK 1,250,000</option>
                <option value="partial">MWK 650,000</option>
                <option value="none">None</option>
              </select>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
                onClick={() => navigate("/bank-details")}
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
                onClick={() => navigate("/logout")}
              >
                Finish
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm mt-8 font-sans">
            &copy; 2024 Higher Education Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApprovedLoanDetails;
