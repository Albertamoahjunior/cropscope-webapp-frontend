import React, { useState, useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {StandardTextField, StandardButton, StandardTypography} from './MyComponents'


const AdminSignupForm = () => {
  //const history = useNavigate();
  const { adminSignup, authError } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert('Passwords do not match');
    }else{
      let auth = adminSignup(email, password);
         auth.then(value => {
      if (value) {
        navigate('/');
      } else {
        alert('Invalid Credentials');
      }
    })
    }
    
  };


  return (
    <div className='container' >
      <StandardTypography variant="h2" mb="3rem" mt="3rem">Admin Signup</StandardTypography>
      <form onSubmit={handleSubmit}>
         <div>
          <StandardTextField label="Username/Email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} type="text"/>
        </div>
        <div>
          <StandardTextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} type="password"/>
        </div>
        <div>
          <StandardTextField label="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required={true} type="password"/>
        </div>
        {authError && <p>{authError}</p>}
        <StandardButton type="submit" children={"Signup"}/>
      </form>
      <Link  to="/admin/login"><StandardTypography variant="h5" mt="2rem" color="primary">Already have an account?</StandardTypography></Link>
    </div>
  );
};

export default AdminSignupForm;
