import React from 'react';
import './styles/FarmerCard.css';
// Import the md5 hashing library
import { StandardButton, TextButton } from './MyComponents';
import md5 from 'md5';

// Function to get a Gravatar URL
const getGravatarUrl = (email) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

const FarmerCard = ({ farmer }) => (
  <div className="farmer-card">
    <img className="farmer-avatar" src={getGravatarUrl(farmer.email)} alt={`${farmer.fullName}'s avatar`} />
    <div className="farmer-info">
      <p><strong>ID:</strong> {farmer._id}</p>
      <p><strong>Name:</strong> {farmer.fullName}</p>
      <p><strong>Email:</strong> {farmer.email}</p>
      <p><strong>Location:</strong> {farmer.location}</p>
      <p><strong>Phone:</strong> {farmer.phone}</p>
      <div className="farmer-buttons">
        <TextButton onClick={() => window.location.href = `/admin/farmer/${farmer._id}/edit`}>Edit</TextButton>
        <StandardButton onClick={() => window.location.href = `/admin/farmer/${farmer._id}/delete`}>Delete</StandardButton>
      </div>
    </div>
  </div>
);

export default FarmerCard;

