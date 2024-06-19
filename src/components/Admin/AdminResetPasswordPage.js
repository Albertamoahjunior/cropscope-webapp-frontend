import React, { useState, useContext } from 'react';
import { StandardButton, StandardTextField, StandardTypography } from './MyComponents';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const AdminLoginForm = () => {
  const { adminReset, authError } = useContext(AuthContext);
  const [cpassword, setCpassword] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(cpassword !== password) {
        alert('Passwords do not match');
      }else{
        adminReset(password);
    }
  };

  return (
    <div>
      <StandardTypography variant="h2" mt="2rem" mb="2rem">New Password</StandardTypography>
      <form onSubmit={handleSubmit}>
        <div>
          <StandardTextField type="email" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
        </div>
        <div>
          <StandardTextField type="password" label="Confirn Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)}  required={true} />
        </div>
        {authError && <p>{authError}</p>}
        <StandardButton type="submit" color="success">Reset</StandardButton>
      </form>
      <div>
        <Link to="/"><StandardTypography color="primary" variant="h5" mt="2rem">Back</StandardTypography></Link>
      </div>
    </div>
  );
};

export default AdminLoginForm;