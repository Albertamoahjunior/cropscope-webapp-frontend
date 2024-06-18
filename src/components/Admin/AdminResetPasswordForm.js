import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {StandardTextField, StandardButton, StandardTypography} from './MyComponents'


const AdminResetPasswordForm = () => {
  const { adminResetPassword, authError } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    adminResetPassword(email);
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
    </div>
  );
};

export default AdminResetPasswordForm;
