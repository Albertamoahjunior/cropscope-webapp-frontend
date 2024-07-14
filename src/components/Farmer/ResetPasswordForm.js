import React, { useState, useContext } from 'react';
import { StandardButton, StandardTextField, StandardTypography } from './MyComponents';
import { AuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLoginForm = () => {
  const { adminReset, authError } = useContext(AuthContext);
  const [cpassword, setCpassword] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cpassword !== password) {
      toast.error('Passwords do not match', {
        position: "center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const resetMessage = await adminReset(password);
      if (resetMessage === 'Password reset successfully') {
        toast.success('Password reset successfully', {
          position: "center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('Error resetting password', {
          position: "center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div>
      <StandardTypography variant="h4" mt="2rem" mb="6rem">Set New Password</StandardTypography>
      <form onSubmit={handleSubmit}>
        <div>
          <StandardTextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
        </div>
        <div>
          <StandardTextField type="password" label="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required={true} />
        </div>
        {authError && <p>{authError}</p>}
        <StandardButton type="submit" color="success">Reset</StandardButton>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminLoginForm;
