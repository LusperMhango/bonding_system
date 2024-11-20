import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';

const CreateAccount = () => {
  const [firstname, setFirstname] = useState('');
  const [surname, setsurname] = useState('');
  const [RegNumber, setRegnumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAccount = async (e) => {
    e.preventDefault();
  
  try{
    const response = await api.post('/auth/create',{firstname, surname, RegNumber, email, password})

    const token = response.data.accessToken
    
    localStorage.setItem('accessToken', token);
      
      navigate('/login');
    } catch (error) {
      console.error('failed to create an account:', error);
      setError('incorrect input');
    }

    }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 py-10 px-4 scroll w-full overflow-y-auto transform transition">
      <div className="max-w-xl bg-white px-4 center border border-gray-200 rounded shadow-lg w-full transition max-h-screen-1/2">
       
        <header className="text-center mb-6">
          <img src="logo.png" alt="Logo" className="w-34 h-32 mx-auto mb-4 rounded-full mt-6" />
          <h2 className="text-lg font text-blue-800 font-sans">SFMIS - Create Account</h2>
        </header>

        
        <form onSubmit= {handleAccount} className="space-y-4 max-h-1/2">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="firstname"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="text-md w-3/4 p-1 border border-yellow-700  "
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="surname"
              required
              value={surname}
              onChange={(e) => setsurname(e.target.value)}
              className="text-md w-3/4 p-1 border border-yellow-700"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="regnumber"
              required
              value={RegNumber}
              onChange={(e) => setRegnumber(e.target.value)}
              className="text-md w-3/4 p-1 border border-yellow-700"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-md w-3/4 p-1 border border-yellow-700 "
            />
          </div>
          <div className="flex justify-center">
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-md w-3/4 p-1 border border-yellow-700"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="password"
              placeholder="Confirm password"
              required
              className="text-md w-3/4 p-1 border border-yellow-700"
            />
          </div>

          <div className="flex justify-between items-center mt-4 px-16">
            <button
              type="submit"
              className=" ml-36 bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-gray-900 transition"
            >
              Create Account
            </button>
          </div>
          <div className='mb-4 flex justify-center item-center ml-4'>
          <button
            type="button"
            className="mb-4 font-sans block text-blue-800 hover:underline text-center font-medium"
            onClick={() => navigate('/login')}
          >
            Already have an account?
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
