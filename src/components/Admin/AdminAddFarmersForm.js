import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StandardTypography, StandardTextField, StandardButton, TextButton } from './MyComponents';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#f8f9fa', // Change background color here
    color: '#333', // Change text color here
  },
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: '#107a33', // Change title background color here
  color: '#fff', // Change title text color here
}));

const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: '#f8f9fa', // Change content background color here
  color: '#333', // Change content text color here
}));

const CustomDialogActions = styled(DialogActions)(({ theme }) => ({
  backgroundColor: '#f8f9fa', // Change actions background color here
  color: '#333', // Change actions text color here
}));

const AdminAddFarmerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const adminToken = localStorage.getItem('adminToken');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setError('Passwords do not match');
      setOpenDialog(true);
    } else {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/add-farmer`, 
          {
            fullName: name,
            email: email,
            location: location,
            password: password,
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
        setOpenDialog(true);
      } catch (error) {
        setError('Error adding farmer');
        setOpenDialog(true);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
          <StandardTextField label="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} required={true}/>
        </div>
        <div>
          <StandardTextField label="Phone Number" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required={true}/>
        </div>
        <StandardButton type="submit">Add Farmer</StandardButton>
      </form>
      <TextButton onClick={back} mt="2rem">Back</TextButton>

      <CustomDialog open={openDialog} onClose={handleCloseDialog}>
        <CustomDialogTitle>{error ? 'Error' : 'Success'}</CustomDialogTitle>
        <CustomDialogContent>
          <br/>
          {error ? error : successMessage}
        </CustomDialogContent>
        <CustomDialogActions>
          <Button onClick={handleCloseDialog} color="success">
            OK
          </Button>
        </CustomDialogActions>
      </CustomDialog>
    </div>
  );
};

export default AdminAddFarmerForm;

