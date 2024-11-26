// TermsAndConditionsPage.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";

function TermsAndConditionsPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      setUploadMessage("Please select a file to upload.");
      return;
    }

    // Simulate file upload
    setTimeout(() => {
      setUploadMessage(`File "${selectedFile.name}" uploaded successfully.`);
      setSelectedFile(null); // Reset file input after upload
    }, 1000); // Simulated upload delay
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Terms and Conditions
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            1. General Terms
          </h2>
          <p className="text-gray-600 mb-4">
            1.1 These Terms and Conditions govern the online bonding process,
            loan application, and repayment obligations managed by the Malawi
            Higher Education Students' Grants & Loans Board (hereafter referred
            to as "the Board").
          </p>
          <p className="text-gray-600 mb-4">
            1.2 By applying for a loan and participating in the bonding process,
            you (the borrower) agree to abide by these Terms and Conditions.
          </p>
          <p className="text-gray-600 mb-4">
            1.3 The Board reserves the right to amend these Terms and
            Conditions. All updates will be communicated through the official
            website or other official channels.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            2. Eligibility
          </h2>
          <p className="text-gray-600 mb-4">
            2.1 Only Malawian students registered in accredited higher education
            institutions are eligible for loans and grants.
          </p>
          <p className="text-gray-600 mb-4">
            2.2 Applicants must provide proof of enrollment, valid national
            identification, and supporting documentation during the application
            process.
          </p>
          <p className="text-gray-600 mb-4">
            2.3 Misrepresentation of any information may result in immediate
            disqualification and possible legal action.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            3. Bonding Process
          </h2>
          <p className="text-gray-600 mb-4">
            3.1 Students who receive loans from the Board are required to commit
            to a bonding agreement, which mandates service to Malawi after
            graduation for a specified period.
          </p>
          <p className="text-gray-600 mb-4">
            3.2 The bonding period and terms will be specified in the individual
            agreement provided upon loan approval.
          </p>
          <p className="text-gray-600 mb-4">
            3.3 Students must sign the bonding agreement electronically through
            the online platform. Unsigned agreements will result in loan
            ineligibility.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            4. Loan Repayment
          </h2>
          <p className="text-gray-600 mb-4">
            4.1 Loan repayment begins six months after the completion of
            studies, or upon securing employment, whichever comes first.
          </p>
          <p className="text-gray-600 mb-4">
            4.2 The repayment schedule, including interest rates and penalties
            for late payment, will be communicated in the loan agreement.
          </p>
          <p className="text-gray-600 mb-4">
            4.3 Defaulting on loan repayment may result in legal action and
            reporting to credit reference bureaus.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            5. Supporting Documentation Upload
          </h2>
          <p className="text-gray-600 mb-4">
            5.1 Students are required to upload necessary documents, such as
            identification, proof of enrollment, and bonding agreement
            signatures, to complete the bonding process.
          </p>
          <div className="mt-4">
            <input
              type="file"
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="mb-2 block w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              onClick={handleFileUpload}
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md shadow-md hover:bg-orange-600 transition duration-300"
            >
              Upload File
            </button>
            {uploadMessage && (
              <p className="mt-2 text-green-600 font-medium">{uploadMessage}</p>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-gray-300 text-sm">
          &copy; 2024 Malawi Higher Education Students' Grants & Loans Board
        </p>
      </footer>
    </div>
  );
}

export default TermsAndConditionsPage;
