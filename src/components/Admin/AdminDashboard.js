import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import AdminFarmersList from './AdminFarmersList';
import { TextButton, StandardTypography} from './MyComponents';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { adminLogout, authError } = useContext(AuthContext);

  const handleLogout = () =>{
    adminLogout();
    navigate('/admin/landing');
  }

  return (
    <div>
      <StandardTypography variant="h2" mt="2rem" mb="0.4rem">Admin Dashboard</StandardTypography>
      <AdminFarmersList />
      
      {authError && <p>{authError}</p>}
      <TextButton onClick={handleLogout}>Logout</TextButton>
    </div>
  );
};

export default AdminDashboard;
