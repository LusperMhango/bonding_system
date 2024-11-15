import { defaults } from "autoprefixer";
import React, { useState } from "react";
import { GiBranchArrow } from "react-icons/gi";
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

        <p className="text-center mb-4 border-b-2 border-black w-full shadow-xl font-bold mt-4">Enter Bank Details</p>
        <div className="flex justify-center items-center font-sans mt-16">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="font-sans mb-4 font-light"><b>Bank name:</b>
              <input
                type="text"
                name="bankname"
                placeholder="Bank name"
                value={formData.bankname}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 border-solid rounded-md placeholder:text-gray-400 flex justify-center items-center " />
            </label>

            <label className="font-sans mb-4 font-light"><b>Branch:</b>
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={formData.branch}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center item-center" />
            </label>
           
            <label className="font-sans mb-4 font-light"><b>Account Name:</b>
              <input
                type="text"
                name="accountname"
                placeholder="Account Name"
                value={formData.accountname}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center items-center " />
            </label>
            <label className="font-sans mb-4 font-light"><b>Acccount number:</b>
              <input
                type="number"
                name="accountumber"
                placeholder="Account number"
                value={formData.accountnumber}
                onChange={handleInputChange}
                className="w-80 space-y-4 p-2 border border-yellow-800 rounded-md placeholder:text-gray-400 flex justify-center items-center " />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </label>

              <button 
            type="submit"
            className="w-full-3/4 p-2 bg-yellow-600 text-white rounded-md hover:bg-gray-800 mt-16">
                Previous
                </button>

            <button 
            type="submit"
            className="w-full-3/4 p-2 bg-yellow-600 text-white rounded-md hover:bg-gray-800 ml-40 mt-16">
                Proceed
                </button>
              
            </form>
            
        </div>
        <p className="text-center text-sm mt-8 font-bold font-sans mt-40 ">
          2024 Higher Education<br></br>Students' Grants & Loans Board
        </p>
      </div>
    </div>
    </div>
  );
};

