import React,{useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { setupAutoLogout, setupInactivityLogout } from '../utility/utilityService';

// import { ToastContainer } from "react-toastify";
function Layout() {
 

    useEffect(() => {
       // Setup all logout mechanisms
      setupAutoLogout();// JWT expiry based
      
      // Setup inactivity logout (10 minutes)
    const cleanupInactivity = setupInactivityLogout(10);

    // Cleanup on unmount
    return () => {
      if (cleanupInactivity) cleanupInactivity();
    };
  }, []);
   return (
    <div>
      <div>
        {/* <ToastContainer /> */}
        <Header />
      </div>

      <div>
        
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
