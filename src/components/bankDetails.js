import React, { useState } from "react";
import Navbar from "./Navbar";

export const BankDetails = () => {
  const [formData, setFormData] = useState({
    bankname: "",
    branch: "",
    accountname: "",
    accountnumber: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(formData).some((field) => field === "");
    if (isEmptyField) {
      setError("Please fill out all fields before proceeding.");
      return;
    }
    setError("");
    alert("Form uploaded successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-300 font-sans">
        <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg max-h-screen-1/2 mt-16 mb-16">
          <h2 className=" font-sans text-center text-2xl font-bold text-gray-800 mb-4 ">
            BANK DETAILS FORM
          </h2>
          <p className="text-center text-gray-600 mb-8 font-sans">
            Please provide accurate banking details for bonding.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Bank Name
              </label>
              <input
                type="text"
                name="bankname"
                placeholder="Enter your bank's name"
                value={formData.bankname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Branch Name
              </label>
              <input
                type="text"
                name="branch"
                placeholder="Enter your branch name"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Account Name
              </label>
              <input
                type="text"
                name="accountname"
                placeholder="Enter the account holder's name"
                value={formData.accountname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Account Number
              </label>
              <input
                type="number"
                name="accountnumber"
                placeholder="Enter your account number"
                value={formData.accountnumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="flex justify-between items-center mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700"
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
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
