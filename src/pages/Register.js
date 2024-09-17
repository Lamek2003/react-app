import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });
      
      if (response.ok) {
        setSuccessMessage('Registration successful! You can now log in.');
        setError('');
        // Optionally, redirect to login page or clear the form
        // window.location.href = '/login';
      } else {
        const result = await response.json();
        setError(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white mt-6 rounded-lg shadow-md w-full max-w-md">
        <div className="text-3xl font-bold text-gray-900 mb-6 text-center">Register</div>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 border border-gray-300 focus:outline-none"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 border border-gray-300 focus:outline-none"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 border border-gray-300 focus:outline-none"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-gray-200 border border-gray-300 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-indigo-600 text-white rounded hover:bg-indigo-500"
          >
            Register
          </button>

          <p className="mt-4 text-center">
            <Link to="/login" className="text-blue-800 hover:underline">เข้าสู่ระบบ</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
