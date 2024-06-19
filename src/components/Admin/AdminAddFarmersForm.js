import React, { useState } from 'react';
import axios from 'axios';
import { StandardTypography, StandardTextField, StandardButton, TextButton} from './MyComponents';

const AdminAddFarmerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/add-farmer`, {
        name,
        email,
        location,
      });
      setSuccessMessage(`Farmer added successfully with ID: ${response.data.id}`);
      setError(null);
    } catch (error) {
      setError('Error adding farmer');
    }
  };

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
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        <StandardButton type="submit">Add Farmer</StandardButton>
      </form>
      <TextButton href="/admin/dashboard" mt="2rem">Back</TextButton>
    </div>
  );
};

export default AdminAddFarmerForm;
