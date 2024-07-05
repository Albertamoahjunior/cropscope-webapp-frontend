
import React, { createContext, useState} from 'react'; //I removed useEffect
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(null);

  // useEffect(() => {
  //   const checkAdminAuthentication = async () => {
  //     const token = localStorage.getItem('adminToken');
  //     if (token) {
  //       try {
  //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/check-auth`, {
  //           headers: {
  //             "x-auth-token": token,
  //           },
  //         });
  //         if (response.data.success) {
  //           setToken(token);
  //           setIsAdminAuthenticated(true);
  //           console.log("hey")
  //         } else {
  //           localStorage.removeItem('adminToken');
  //           console.log("hi");
  //         }
  //       } catch (error) {
  //         console.error('Error checking admin authentication:', error);
  //       }
  //     }
  //   };

  //   checkAdminAuthentication();
  // }, []);

  const adminSignup = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/signup`, {
        email,
        password,
      });
      setToken(response.data.token);
      setIsAdminAuthenticated(true);
      setAuthError(null);
      localStorage.setItem('adminToken', token);
      return true;
    } catch (error) {
      setAuthError('Error signing up');
      return false;
    }
  };

  const adminLogin = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/login`, {
        email,
        password,
      });
      setToken(response.data.token);
      setIsAdminAuthenticated(true);
      setAuthError(null);
      localStorage.setItem('adminToken', response.data.token);
      return true;
    } catch (error) {
      setAuthError('Invalid credentials');
      return false;
    }
  };

  const adminLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminAuthenticated(false);
    setToken(null);
  }

  const adminResetPassword = async (email) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/admin/forgot-password`, { email });
      setAuthError(null);
    } catch (error) {
      setAuthError('Error resetting password');
    }
  };

   const farmerResetPassword = async (email) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/farmer/forgot-password`, { email });
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
        farmerResetPassword, 
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

