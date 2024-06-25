import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from'react-router-dom';
import { StandardTypography, StandardTextField, StandardButton, TextButton} from './MyComponents';

const AdminAddFarmerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const adminToken = localStorage.getItem('adminToken');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password!== cpassword) {
      alert('Passwords do not match');
    } else {
       try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/add-farmer`, 
        {
        fullName:name,
        email: email,
        location: location,
        password:  password,
        phone: phone,
      },
      {
        headers: {
          'x-auth-token': adminToken, // Use x-auth-token header for the JWT token
        },
      }
    );
      setSuccessMessage(`Farmer added successfully with ID: ${response.data.id}`);
      setError(null);
      setName('');
      setEmail('');
      setLocation('');
      setPhone('');
      setPassword('');
      setCpassword('');
    } catch (error) {
      setError('Error adding farmer');
    }
    }
  };

  const back = () => {
    navigate('/');
  }

  return (
    <div>
      <StandardTypography variant="h3" mt="2rem" mb="2rem">Admin Add Farmer</StandardTypography>
      <form onSubmit={handleSubmit}>
        <div>
          <StandardTextField label="Name" type="text" mt="1rem" mb="1rem" value={name} onChange={(e) => setName(e.target.value)} required={true} />
        </div>
        <div>
          <StandardTextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
        </div>
        <div>
          <StandardTextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
        </div>
        <div>
          <StandardTextField label="Confirm Password" type="password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required={true}/>
        </div>
        <div>
          <StandardTextField label="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} required= {true}/>
        </div>
          <div>
          <StandardTextField label="Phone Number" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required= {true}/>
        </div>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        <StandardButton type="submit">Add Farmer</StandardButton>
      </form>
      <TextButton onClick={back} mt="2rem">Back</TextButton>
    </div>
  );
};

export default AdminAddFarmerForm;
