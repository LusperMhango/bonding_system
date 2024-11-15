import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 py-10 px-4 scroll w-full overflow-y-auto transform transition">
      <div className="max-w-2xl bg-white px-4 center border border-gray-300 rounded shadow-2xl w-full transition max-h-screen-1/2">
        {/* Header */}
        <header className="text-center mb-6">
          <img src="logo.png" alt="Logo" className="w-32 h-32 mx-auto mb-4 rounded-full mt-6"/>
          <h2 className="text-xl font text-blue-800 font-sans">SFMIS - Create Account</h2>
        </header>

        {/* Form */}
        <form className="space-y-4 max-h-1/2">
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder="Firstname"
              required
              className="text-lg w-3/4 p-2 border border-yellow-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder="Surname"
              required
              className="text-lg w-3/4 p-2 border border-yellow-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder="RegNumber"
              required
              className="text-lg w-3/4 p-2 border border-yellow-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="email"
              placeholder="Email"
              required
              className="text-lg w-3/4 p-2 border border-yellow-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="password"
              placeholder="Password"
              required
              className="text-lg w-3/4 p-2 border border-yellow-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="password"
              placeholder="Confirm password"
              required
              className="text-lg w-3/4 p-2 border border-yellow-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center mt-4 px-16">
            <button
              type="button"
              className="ml-4 bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg hover:bg-yellow-700 transition "
              onClick={() => navigate('/login')}
            >
              Log in
            </button>
            <button
              type="submit"
              className="mr-4 bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-700 transition"
              onClick={() => navigate('/landingpage')}
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <footer className="mt-6 text-center text-gray-500 text-sm">
          {/* Optional Footer Content */}
        </footer>
      </div>
    </div>
  );
};

export default CreateAccount;
