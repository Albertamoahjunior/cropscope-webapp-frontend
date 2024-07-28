import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AdminFarmersList from './AdminFarmersList';
import { StandardTypography, TextButton} from './MyComponents';
import './styles/AdminDashboard.css';

const white = '#ffff'
const buttonTextStyle = {
    marginLeft: "0rem",
    marginRight: "0rem",
    height: "4rem",
    color:"#107a33",
    fontSize: "1.4rem",
    justify: "left",
    width: "100%",
  }

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { adminLogout, authError } = useContext(AuthContext);

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/landing');
  }

  const handleAddFarmer = () => {
    navigate('/admin/add-farmer');
  }

  return (
    <div className="admin-dashboard">
        <div className='side-bar'>
          <div className='bar-indicator'><StandardTypography color={white} variant={'h4'}>Admin</StandardTypography></div>
          <TextButton onClick={handleAddFarmer} style={buttonTextStyle}>Add Farmer</TextButton>
          <TextButton onClick={handleLogout} style={buttonTextStyle}>Log out</TextButton>
        </div>
        <div className='main-section'>
          <StandardTypography variant="h2" mt="2rem" mb="0.4rem">Admin Dashboard</StandardTypography>
          {authError && <p>{authError}</p>}
          <AdminFarmersList />
        </div>
    </div>
  );
};

export default AdminDashboard;
