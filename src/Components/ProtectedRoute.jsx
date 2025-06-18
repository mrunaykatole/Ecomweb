
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isVerified = localStorage.getItem('isVerified') === 'true';

  return isVerified ? children : <Navigate to="/Signup" />;
};

export default ProtectedRoute;
