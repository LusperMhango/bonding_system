import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api'; // Ensure you import your API instance

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your login API endpoint
      const response = await api.post('/auth/login', { email, password });
      
      // Assuming the response contains the access token
      const token = response.data.accessToken;
      
      // Store the access token in localStorage
      localStorage.setItem('accessToken', token);
      
      // Redirect the user to the landing page after successful login
      navigate('/landingpage');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="font-sans flex items-center shadow-xl justify-center h-screen bg-gray-800">
      <div className="font-sans bg-white shadow-xl rounded p-8 w-5/12 h-6/12 max-w-screen-3/4 mx-auto md:p-6 lg:p-8">
        <div className="h-32 mb-8">
          <img
            src="logo.png" 
            alt="Logo"
            className="mx-auto mb-8 h-40 w-42 rounded"
          />
        </div>
        <h2 className="font-sans text-xl mb-2 text-center text-gray-500">SFMIS-Login</h2>
        <div className="max-w-center-1/4 max-auto">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex justify-center">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-sans w-3/4 p-2 border border-yellow-800 py-1 shadow-2xl"
              />
            </div>

            <div className="flex justify-center">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="font-sans w-3/4 p-2 border border-yellow-800 py-1 shadow-2xl"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="font-sans w-3/4 bg-gray-700 text-white p-2 font-semibold py-1 hover:bg-gray-900 shadow-2xl"
              >
                Login
              </button>
            </div>

            {error && <p style={{ color: 'red' }} className="text-center">{error}</p>}
          </form>
        </div>

        <div className="flex justify-center">
          <div className="w-3/4 h-px bg-gray-800 my-3"></div>
        </div>
<div className="flex justify-center mt-6">
  <button
    type="button"
    className="font-sans text-gray-500 hover:underline font-medium mr-4"
    onClick={() => navigate('/')}
  >
    Signup
  </button>
  <a
    href="/reset-password"
    className="font-medium font-sans text-gray-500 hover:underline"
  >
    Lost your password?
  </a>
</div>
<p className="font-sans text-gray-600 text-center mt-2 text-sm">
  @ 2024 Higher Education Students' Grants & Loans board
</p>
</div>
</div>
);
  }
export default Login;
