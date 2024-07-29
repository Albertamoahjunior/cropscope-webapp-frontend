import * as React from 'react';
import background from '../static/bg.jpg';
import logo from '../static/logo.png';
import { StandardButton } from './Admin/MyComponents';



const LandingPage = () => {	
    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      color: "white",
      textAlign: "center",
      paddingTop: "5rem",
      paddingBottom: "1rem",
     };

     const logoStyle = {
      width: "20rem",
      height: "20rem",
      marginLeft:"50rem",
      backgroundImage: `url(${logo})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
     }


    return (
     <div className="container" style={backgroundStyle}>
     

      <header className="header">
        <h1 className="title">Welcome to CropScope</h1>
        <div className='logoContainer' style={logoStyle}>

        </div>

        <p className="subtitle">
          Empowering farmers with data-driven insights for better crop management.
        </p>
    
      </header>

       <div>
	      <StandardButton variant="contained" href="/admin/login" mt="2rem" >Login</StandardButton>
      	{/* <StandardButton variant="contained" href="/admin/signup" >Register</StandardButton> */}
	  </div>
    </div>

    );
};

export default LandingPage;

