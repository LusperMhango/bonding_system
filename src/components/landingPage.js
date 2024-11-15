

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function LandingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="transition-transform duration-700 ${isMoved ? 'translate-y-10' : 'translate-y-0'">
      <Navbar/>
    <div className="flex justify-center w-full">
      <div className="flex flex-col min-h-screen w-full">
  
        
        <div className="flex-grow pt-20 px-4 bg-gray-200 text-center flex flex-col items-center w-full">
          <h1 className="font-sans text-2xl text-black mb-8 mt-10 shadow-xl font-bold">WELCOME TO STUDENT BONDING PROCESS</h1>
          
          <img
          src="shake.jpg"
          alt="Handshake illustration"
          className="mx-auto mb-6 h-96 w-96 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-full xl:w-96 rounded-3xl shadow-lg border-4 border-gray-300 hover:scale-105 hover:shadow-2xl transition-transform duration-300 mb-2 mt-2"
          />

          
          <div className="w-full h-px bg-gray-800 my-2"></div>
          <div className="w-2/3 h-px bg-gray-800 my-2"></div>
          
          <button 
            className="bg-orange-400 text-black rounded-lg font-semibold text-sm px-10 py-2 mt-4 mb-4 hover:bg-orange-500" 
            onClick={() => navigate('/personal')}
          >
            Start Bonding
          </button>
          <footer className=" w-full p-0 text-center relative bottom-0 left-1/2 transform -translate-x-1/2 mb-16">
          <p className="text-gray-900 font-sans">@2024 Higher Education</p>
          <p className="text-gray-900 font-sans">Students' Grants & Loans Board</p>
        </footer>
        </div>
       
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
