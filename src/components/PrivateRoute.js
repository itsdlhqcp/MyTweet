import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const profile = true;  

  return profile ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
