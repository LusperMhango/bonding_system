import React, { useState } from "react";
import Navbar from "./Navbar";

export const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    sex: "",
    phoneNumber: "",
    homeVillage: "",
    ta: "",
    nationalId: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const isEmptyField = Object.values(formData).some((field) => field === "");
    if (isEmptyField) {
      setError("Please fill out all fields before proceeding.");
      return;
    }
    setError("");
    alert("Form uploaded successfully!");
  };

  return (
    <div >
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
        <div className="w-full max-w-2xl p-10 bg-white shadow-2xl rounded-lg mt-16 mb-16">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
            Bonding in Progress
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter Personal Details
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Firstname
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter Firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                placeholder="Enter Surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Gender
              </label>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Home Village
              </label>
              <input
                type="text"
                name="homeVillage"
                placeholder="Enter Home Village"
                value={formData.homeVillage}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Traditional Authority
              </label>
              <input
                type="text"
                name="ta"
                placeholder="Enter T/A"
                value={formData.ta}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                National ID
              </label>
              <input
                type="text"
                name="nationalId"
                placeholder="Enter National ID"
                value={formData.nationalId}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
              >
                Proceed
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm mt-8">
            &copy; 2024 Higher Education Students' Grants & Loans Board
          </p>
        </div>
      </div>
    </div>
  );
};
