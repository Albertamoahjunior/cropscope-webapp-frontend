import React  from 'react';
import {Navigate} from 'react-router-dom';

//modified to allow everything
//remember to change the false value from children to navigate
const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};


export default PrivateRoute;
