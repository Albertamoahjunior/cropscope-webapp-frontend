import React from 'react';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
  const { isAdminAuthenticated } = useContext(AuthContext);

  return isAdminAuthenticated ? <Outlet /> : <Navigate to="/admin/landing" />;
};

export default PrivateRoute;
