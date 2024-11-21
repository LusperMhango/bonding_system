import React, { useState } from 'react';


import axios from 'axios';

const LoanApplication = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [personalDetails, setPersonalDetails] = useState({});
  const [parentDetails, setParentDetails] = useState({});
  const [bankDetails, setBankDetails] = useState({});
  const [LoanAmount, setLoanAmount] = useState({});

  // Handlers for each form submission
  const handlePersonalDetailsSubmit = (data) => {
    setPersonalDetails(data);
    setStep(2); // Move to the next step
  };

  const handleParentDetailsSubmit = (data) => {
    setParentDetails(data);
    setStep(3); // Move to the next step
  };

  const handleBankDetailsSubmit = async (data) => {
    setBankDetails(data);

    // Combine all form data
    const combinedData = {
      personalDetails,
      parentDetails,
      LoanAmount,
      bankDetails: data, // Latest data
    };

    // Submit to backend
    try {
      await axios.post('http://localhost:3000/', combinedData);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Submission failed.');
    }
  };

  // Render the current form based on the step
  return (
    <div>
      {step === 1 && <personalDetails onSubmit={handlePersonalDetailsSubmit} />}
      {step === 2 && <parentDetails onSubmit={handleParentDetailsSubmit} />}
      {step === 3 && <LoanAmount onSubmit={hanle} />}
      {step === 4 && <bankDetails onSubmit={handleBankDetailsSubmit} />}
    </div>
  );
};

export default LoanApplication;
