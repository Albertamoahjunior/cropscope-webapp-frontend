import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { StandardTextField, StandardButton, StandardTypography } from './MyComponents';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminResetPasswordForm = () => {
  const { adminResetPassword, authError } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminResetPassword(email);
      toast.success('Password reset email sent successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('Failed to reset password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <StandardTypography variant="h2" mt="2rem" mb="2rem">Admin Reset Password</StandardTypography>
      <form onSubmit={handleSubmit}>
        <div>
          <StandardTextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
        </div>
        {authError && <p>{authError}</p>}
        <StandardButton mt="2rem" type="submit">Reset Password</StandardButton>
      </form>
      <Link to="/admin/login"><StandardTypography color="primary" variant="h5">Back</StandardTypography></Link>
      <ToastContainer />
    </div>
  );
};

export default AdminResetPasswordForm;
