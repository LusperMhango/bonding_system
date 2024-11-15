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
    <div>
      <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-400 font-sans">
      <div className="w-full h-screen p-8 bg-gray-300 shadow-lg rounded-lg mt-16">
        <h2 className="text-center text-xl font-semibold mb-4 shadow-lg font-sans">
          BONDING IN PROGRESS
        </h2>

        <p className="text-center mb-4 border-b-2 border-black w-full shadow-xl font-bold mt-4">Enter Personal Details</p>
        <div className="flex justify-center items-center font-sans mt-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="font-sans mb-4 font-light"><b>Firstname:</b>
              <input
                type="text"
                name="firstname"
                placeholder="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 border-solid rounded-md placeholder:text-gray-400 flex justify-center items-center " />
            </label>

            <label className="font-sans mb-4 font-light"><b>Surname:</b>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center item-center" />
            </label>
            <label className="font-sans mb-4 font-light"><b>Gender:</b>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md text-gray-400 flex justify-center items-center "
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label className="font-sans mb-4 font-light"><b>phone Number:</b>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center items-center " />
            </label>
            <label className="font-sans mb-4 font-light"><b>home Village:</b>
              <input
                type="text"
                name="homeVillage"
                placeholder="Home Village"
                value={formData.homeVillage}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center items-center " />
              </label>
              <label className="font-sans mb-4 font-light"><b>Traditional Authority:</b>
              <input
                type="text"
                name="ta"
                placeholder="T/A"
                value={formData.ta}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center items-center " />
                </label>
              <label className="font-sans mb-4 font-light"><b>National_ID:</b>
              <input
                type="text"
                name="nationalId"
                placeholder="National ID"
                value={formData.nationalId}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center items-center " />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              </label>
              <button
                type="submit"
                className="flex bottom-2 right-2 w-full-3/4 p-2 bg-yellow-600 text-white rounded-md hover:bg-gray-800"
              >
                Proceed
              </button>

            </form>
        </div>
        <p className="text-center text-sm mt-8 font-sans">
          @2024 Higher Education<br></br>Students' Grants & Loans Board
        </p>
      </div>
    </div>
    </div>
  );
};
