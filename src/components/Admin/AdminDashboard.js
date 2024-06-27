import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import AdminFarmersList from './AdminFarmersList';
import { TextButton, StandardTypography, MenuButton} from './MyComponents';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { adminLogout, authError } = useContext(AuthContext);

  const handleLogout = () =>{
    adminLogout();
    navigate('/admin/landing');
  }

    const handleAddFarmer = ()  => {
    navigate('/admin/add-farmer');
  }

  return (
    <div>
      <StandardTypography variant="h2" mt="2rem" mb="0.4rem">Admin Dashboard</StandardTypography>
      <MenuButton title="Admin" addFarmer={handleAddFarmer} logout={handleLogout}/>
       {authError && <p>{authError}</p>}
      <AdminFarmersList />
    </div>
  );
};

export default AdminDashboard;
