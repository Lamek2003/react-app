import React from 'react';
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("ต้องการออกจากระบบ?")) {
      logout(); // Call the logout function from the AuthProvider

      // Clear the token from localStorage
      localStorage.removeItem('token');

      // Redirect the user to the login page
      navigate('/login');
    }
  };



  return (
    <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
};



export default LogoutButton;
