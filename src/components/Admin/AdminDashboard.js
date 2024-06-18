import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
//import axios from 'axios';
import AdminFarmersList from './AdminFarmersList';

const AdminDashboard = () => {
  const { adminLogout } = useContext(AuthContext);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={adminLogout}>Logout</button>
      <AdminFarmersList />
    </div>
  );
};

export default AdminDashboard;
