import React  from 'react';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="admin/login" />;
};


export default PrivateRoute;
