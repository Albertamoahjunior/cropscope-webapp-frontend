import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import AuthContextProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminLoginForm from './components/Admin/AdminLoginForm';
import AdminSignupForm from './components/Admin/AdminSignupForm';
import AdminResetPasswordForm from './components/Admin/AdminResetPasswordForm';
import LandingPage from './components/LandingPage';
import AdminAddFarmerForm from './components/Admin/AdminAddFarmersForm';
import AdminResetPasswordPage from './components/Admin/AdminResetPasswordForm';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//remeber to set the private routes
function App() {
  return (
    <div className="App">
    <AuthContextProvider>
        <Router>
          <Routes>
	          <Route exact path="/admin/landing" element={<LandingPage/>} />
            <Route exact path="/admin/login" element={<AdminLoginForm/>} />
            <Route exact path="/admin/signup" element={<AdminSignupForm/>} />
            <Route exact path="/admin/reset-password" element={<AdminResetPasswordForm/>} />
            <Route exact path="/admin/reset-password/:token" element={<AdminResetPasswordPage/>} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<AdminDashboard />} />
            </Route>
            <Route path="/admin/add-farmer" element={<PrivateRoute/>}>
             <Route path="/admin/add-farmer" element={<AdminAddFarmerForm/>} />
            </Route>
          </Routes>
        </Router>
    </AuthContextProvider>
    </div>
  );
}

export default App;
