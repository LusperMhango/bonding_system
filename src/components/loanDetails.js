


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApprovedLoanDetails = () => {
    const navigate = useNavigate();

  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-gray-300 shadow-md rounded-lg fixed-center p-8 max-w-md w-3/4 text-center gap-4 mx-auto md:p-6 lg:p-8">
        
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="logo.jpg" 
              alt="Logo"
              className="h-20 mr-4 rounded-full"
            />
            <div className="flex space-x-2">
              
              <button className="text-sm text-black bg-orange-300 py-2 px-10 rounded-lg hover:bg-yellow-800" onClick={() => navigate('/Landing')}>home</button>
              <button className="text-sm text-black bg-orange-300 py-2 px-10 rounded-lg hover:bg-yellow-800">Help</button>
            </div>
          </div>
          <button onClick={handleMenuClick} className="text-orange-600 bg-orange-400 rounded-3xl p-2">
            <div className="flex flex-col space-y-1">
              <div className="h-1 w-6 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
            </div>
          </button>
        </header>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          // <div className="bg-orange -400 p-4 rounded-lg shadow-md mb-4  ">
            <ul className="text-right">
              <li><button onClick={() => navigate('/page1')} className="text-gray-900 hover:underline">Page 1</button></li>
              <li><button onClick={() => navigate('/page2')} className="text-gray-900 hover:underline">Page 2</button></li>
              <li><button onClick={() => navigate('/page3')} className="text-gray-900 hover:underline">Page 3</button></li>
              <li><button onClick={() => navigate('/page4')} className="text-gray-900 hover:underline">Page 4</button></li>
              {/* <li><button onClick={() => navigate('/page5')} className="text-gray-900 hover:underline">Page 5</button></li>
              <li><button onClick={() => navigate('/page6')} className="text-gray-900 hover:underline">Page 6</button></li>
              <li><button onClick={() => navigate('/page7')} className="text-gray-900 hover:underline">Page 7</button></li>
              <li><button onClick={() => navigate('/page8')} className="text-gray-900 hover:underline">Page 8</button></li>
              <li><button onClick={() => navigate('/page9')} className="text-gray-900 hover:underline">Page 9</button></li> */}
            </ul>
          // </div>
        )}
<h2 className='text-center text-black font-bold my-1'> BONDING IN PROGRESS</h2>
<h4 className='text-center text-gray-600 '>4th: ENTER LOAN AMOUNT  DETAILS</h4>
<div className='w-full h-0.5 bg-gray-800 my-5'></div>


      {/* Form */}
      {/* <div className="w-full max-w-md bg-white p-6 border border-yellow-700 rounded-lg shadow-md"> */}
        <form className="space-y-4">
          <div>
            <label htmlFor="tuition" className="sr-only">Tuition</label>
            <select
              id="tuition"
              className="w-full p-1 bg-gray-300  border border-yellow-700 rounded-lg focus:outline-none"
              required
              >
              <option value="">Tuition:</option>
              <option value="full">MWK 650,000</option>
              <option value="partial">MWK 325,000</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label htmlFor="upkeep" className="sr-only">Upkeep</label>
            <select
              id="upkeep"
              className="w-full p-1 bg-gray-300 border border-yellow-700 rounded-lg focus:outline-none"
              
              required>
              <option value="">Upkeep:</option>
              <option value="full">MWK 590,000</option>
              <option value="partial">MWK 270,000</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label htmlFor="equipment" className="sr-only">total amount</label>
            <select
              id="equipment"
              className="w-full p-1 bg-gray-300 border border-yellow-700 rounded-lg focus:outline-none"
            >
              <option value="">Total amount :</option>
              <option value="full">MWK 1,250,000</option>
              <option value="partial">MWK 650,000</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className='w-full h-0.5 bg-gray-800 my-5'></div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-orange-400 text-gray-950 font-semibold py-1 px-6 rounded-lg hover:bg-yellow-800 transition"
              onClick={() => navigate('/bank-details')}>
              Previous
            </button>
            <button
              type="submit"
              className="bg-orange-400 text-gray-950 font-semibold py-1 px-6 rounded-lg hover:bg-yellow-800 transition"
              onClick={() => navigate('/logout')}>
              Finish
            </button>
          </div>
        </form>
      {/* </div> */}

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-500 ">
        <p className="text-gray-900 text-center">2024 Higher Education </p>
      <p className='text-gray-900 text-center '> Students' Grants & Loans board</p>
      </footer>
    </div>
  );
};

export default ApprovedLoanDetails;
