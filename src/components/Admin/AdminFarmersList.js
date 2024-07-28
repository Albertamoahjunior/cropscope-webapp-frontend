import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StandardTypography } from './MyComponents';
import FarmerCard from './FarmerCard';
import './styles/AdminFarmersList.css';

const AdminFarmersList = () => {
  const [farmers, setFarmers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');

    const fetchFarmers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/list-farmers`, {
          headers: {
            'x-auth-token': adminToken,
          },
        });
        setFarmers(response.data);
        setError(null);
      } catch (error) {
        setError('Error fetching farmers');
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  if (loading) {
    return <StandardTypography variant="h6">Loading...</StandardTypography>;
  }

  return (
    <div className="admin-farmers-list">
      <StandardTypography variant="h4" mt="1rem" mb="1.3rem">Farmers</StandardTypography>
      {error && <p className="error-message">{error}</p>}
      <div className="farmers-container">
        {farmers.map((farmer) => (
          <FarmerCard key={farmer._id} farmer={farmer} />
        ))}
      </div>
    </div>
  );
};

export default AdminFarmersList;
