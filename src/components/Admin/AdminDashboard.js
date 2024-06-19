import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
//import axios from 'axios';
import AdminFarmersList from './AdminFarmersList';
import { TextButton, StandardTypography} from './MyComponents';

const AdminDashboard = () => {
  const { adminLogout } = useContext(AuthContext);

  return (
    <div>
      <StandardTypography variant="h2" mt="2rem" mb="2rem">Admin Dashboard</StandardTypography>
      <AdminFarmersList />
      <TextButton onClick={adminLogout}>Logout</TextButton>
    </div>
  );
};

export default AdminDashboard;
