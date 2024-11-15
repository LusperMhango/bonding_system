
// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './components/landingPage';
import Create from './components/create';
import Login from './components/login';
import { LoanAmountDetails } from './components/LoanAmount';
import { BankDetails } from './components/bankDetails';
import { PersonalDetails } from './components/personalDetails';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Create/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/landingpage" element={<LandingPage/>} />
      <Route path="/personal" element={<PersonalDetails/>} />
      <Route path="/loan" element={<LoanAmountDetails/>} />
      <Route path="/bank" element={<BankDetails/>} />


     
    </Routes>
  );
}

export default App;
