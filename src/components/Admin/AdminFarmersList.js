import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {StandardButton, StandardTypography } from './MyComponents';

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
      <StandardTypography variant="h4" mt="2rem" mb="2rem">Admin Farmers List</StandardTypography>
      {error && <p>{error}</p>}
      <ul>
        {farmers.map((farmer) => (
          <li key={farmer._id}>
            Name: {farmer.name}, Email: {farmer.email}, ID: {farmer._id}
          </li>
        ))}
      </ul>
      <div>
        <StandardButton href="/admin/add-farmer">Add Farmer</StandardButton>
      </div>
    </div>
  );
};

export default AdminFarmersList;
