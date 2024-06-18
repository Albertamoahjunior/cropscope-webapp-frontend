import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const checkAdminAuthentication = async () => {
      const token = localStorage.getItem('adminToken');
      if (token) {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/check-auth`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.success) {
            setToken(token);
            setIsAdminAuthenticated(true);
          } else {
            localStorage.removeItem('adminToken');
          }
        } catch (error) {
          console.error('Error checking admin authentication:', error);
        }
      }
    };

    checkAdminAuthentication();
  }, []);

  const adminSignup = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        email,
        password,
      });
      setToken(response.data.token);
      setIsAdminAuthenticated(true);
      setAuthError(null);
      localStorage.setItem('adminToken', response.data.token);
    } catch (error) {
      setAuthError('Error signing up');
    }
  };

  const adminLogin = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password,
      });
      setToken(response.data.token);
      setIsAdminAuthenticated(true);
      setAuthError(null);
      localStorage.setItem('adminToken', response.data.token);
    } catch (error) {
      setAuthError('Invalid credentials');
    }
  };

  const adminLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminAuthenticated(false);
    setToken(null);
  };

  const adminResetPassword = async (email) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/reset-password`, { email });
      setAuthError(null);
    } catch (error) {
      setAuthError('Error resetting password');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAdminAuthenticated,
        authError,
        adminSignup,
        adminLogin,
        adminLogout,
        adminResetPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
