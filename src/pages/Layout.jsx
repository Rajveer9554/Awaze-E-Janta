import React from 'react';
import {Outlet} from 'react-router';
import Header from "../Components/Header.jsx";
import Footer from "../components/Footer.jsx";

// import { ToastContainer } from "react-toastify";
function Layout() {
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
