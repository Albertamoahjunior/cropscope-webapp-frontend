import React, { useState, useContext } from 'react';
import { StandardButton, StandardTextField, StandardTypography } from './MyComponents';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const AdminLoginForm = () => {
  const { adminLogin, authError } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    adminLogin(email, password);
  };

  return (
    <div>
      <StandardTypography variant="h2" mt="2rem" mb="2rem">Admin Login</StandardTypography>
      <form onSubmit={handleSubmit}>
        <div>
          <StandardTextField type="email" label="Email\Username" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
        </div>
        <div>
          <StandardTextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required={true} />
        </div>
        {authError && <p>{authError}</p>}
        <StandardButton type="submit" color="success">Login</StandardButton>
      </form>
      <div>
        <Link to="/admin/signup"><StandardTypography color="primary" variant="h5" mt="2rem">Don't have an account?</StandardTypography></Link>
        <Link to="/admin/reset-password"><StandardTypography color="primary" variant="h5" mt="0.5rem">Forgot Password</StandardTypography></Link>
      </div>
    </div>
  );
};

export default AdminLoginForm;
