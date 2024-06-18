import React, { useState } from 'react';
import axios from 'axios';

const AdminAddFarmerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
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
      <h2>Admin Add Farmer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        <button type="submit">Add Farmer</button>
      </form>
    </div>
  );
};

export default AdminAddFarmerForm;
