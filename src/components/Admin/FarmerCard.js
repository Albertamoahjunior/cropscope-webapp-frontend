import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StandardButton, TextButton, StandardTextField } from './MyComponents';
import md5 from 'md5';
import './styles/FarmerCard.css';

const getGravatarUrl = (email) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

const textFieldStyle = {
  marginLeft: "0.1rem",
  marginRight: "0rem",
  width: "100%",
  height: "3rem",
  color: "white",
  justify: "left",
  marginBottom: "4rem",
};

const admintoken = localStorage.getItem('adminToken');

const FarmerCard = ({ farmer, refreshFarmers }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedFarmer, setEditedFarmer] = useState({ ...farmer });

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://cropscope-api.vercel.app/api/admin/remove-farmer/${farmer._id}`, {
        headers: {
          'x-auth-token': admintoken,
        },
      });
      if (response.status === 200) {
        toast.success('Delete successful!');
        refreshFarmers();
      } else {
        toast.error('Delete failed!');
      }
    } catch (error) {
      toast.error('An error occurred while deleting!');
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedFarmer((prevFarmer) => ({
      ...prevFarmer,
      [name]: value,
    }));
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.post(`/api/farmer/${farmer._id}`, editedFarmer);
      if (response.data.success) {
        toast.success('Update successful!');
      } else {
        toast.error('Update failed!');
      }
    } catch (error) {
      toast.error('An error occurred while updating!');
    } finally {
      setIsEditModalOpen(false);
    }
  };

  return (
    <div className="farmer-card">
      <ToastContainer />
      <img className="farmer-avatar" src={getGravatarUrl(farmer.email)} alt={`${farmer.fullName}'s avatar`} />
      <div className="farmer-info">
        <p><strong>Name:</strong> {farmer.fullName}</p>
        <p><strong>Email:</strong> {farmer.email}</p>
        <p><strong>Location:</strong> {farmer.location}</p>
        <p><strong>Phone No:</strong> {farmer.phone}</p>
         <p><strong>ID:</strong> {farmer._id}</p>
        <div className="farmer-buttons">
          <TextButton onClick={() => setIsEditModalOpen(true)}>Edit</TextButton>
          <StandardButton onClick={() => setIsDeleteModalOpen(true)}>Del</StandardButton>
        </div>
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Confirm Delete"
      >
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this farmer?</p>
        <p>Name: <strong>{farmer.fullName}</strong></p>
        <div className="modal-buttons">
          <StandardButton onClick={handleDelete}>Yes</StandardButton>
          <TextButton onClick={() => setIsDeleteModalOpen(false)}>No</TextButton>
        </div>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Edit Farmer"
      >
        <h2>Edit Farmer</h2>
        <div className="edit-form">
          <StandardTextField value={editedFarmer.fullName} onChange={handleEditChange} label={'Name'} name={'fullName'} style={textFieldStyle} />
          <StandardTextField value={editedFarmer.email} onChange={handleEditChange} label={'Email'} name={'email'} style={textFieldStyle} />
          <StandardTextField value={editedFarmer.location} onChange={handleEditChange} label={'Location'} name={'location'} style={textFieldStyle} />
          <StandardTextField value={editedFarmer.phone} onChange={handleEditChange} label={'Phone'} name={'phone'} style={textFieldStyle} />
        </div>
        <div className="modal-buttons">
          <StandardButton onClick={handleEditSubmit}>Apply</StandardButton>
          <TextButton onClick={() => setIsEditModalOpen(false)}>Cancel</TextButton>
        </div>
      </Modal>
    </div>
  );
};

export default FarmerCard;
