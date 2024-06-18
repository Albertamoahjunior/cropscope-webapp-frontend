import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminFarmersList = () => {
  const [farmers, setFarmers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/farmers`);
        setFarmers(response.data.farmers);
        setError(null);
      } catch (error) {
        setError('Error fetching farmers');
      }
    };

    fetchFarmers();
  }, []);

  return (
    <div>
      <h2>Admin Farmers List</h2>
      {error && <p>{error}</p>}
      <ul>
        {farmers.map((farmer) => (
          <li key={farmer._id}>
            Name: {farmer.name}, Email: {farmer.email}, ID: {farmer._id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminFarmersList;
