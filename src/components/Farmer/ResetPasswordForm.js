import React, { useState, useContext } from 'react';
import { StandardButton, StandardTextField, StandardTypography } from './MyComponents';
import { AuthContext } from '../../context/AuthContext';


const FarmerResetForm = () => {
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
      <StandardTypography variant="h4" mt="2rem" mb="6rem">New Password</StandardTypography>
      <form onSubmit={handleSubmit}>
        <div>
          <StandardTextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
        </div>
        <div>
          <StandardTextField type="password" label="Confirn Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)}  required={true} />
        </div>
        {authError && <p>{authError}</p>}
        <StandardButton type="submit" color="success">Reset</StandardButton>
      </form>
    </div>
  );
};

export default FarmerResetForm;