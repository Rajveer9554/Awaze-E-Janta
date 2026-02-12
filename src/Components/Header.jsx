


import React from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import { manualLogout } from '../utility/utilityService';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { RiChatSmileAiFill } from "react-icons/ri";




function Header() {
   const navigate = useNavigate();
   
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    toast.error('Logged out successfully!');

    setTimeout(() => {
      manualLogout();
    }, 500);
     localStorage.removeItem("token"); // JWT token clear
  navigate("/login"); // redirect to login

  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 h-16 px-2 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between">
      
      
      <Link
  to="/"
  className="text-white font-bold text-lg sm:text-sm md:text-2xl hover:border-2 hover:border-green-700 rounded-2xl tracking-wide transition leading-tight"
>
  Awaze-E-Janata
</Link>
 


      {/* Navigation Links */}
      <ul className="flex flex-nowrap items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base whitespace-nowrap">
        <NavLink
              to="/ai-chat"
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-semibold bg-white px-2 py-1 sm:px-3 sm:py-2 rounded-full'
                  : 'text-white hover:text-blue-400'
              }
            >
              <RiChatSmileAiFill size={20}  className="inline-block mr-1 mb-1 " />
              <span className=''> AiGuide </span>
            </NavLink>
        {[
           
          { label: 'About', path: '/about-us' },
          { label: 'Contact', path: '/contact-us' },
          { label: 'Complaint', path: '/register-complaints' },
          
         
          
        ].map(({ label, path }) => (
          <li key={label} className="cursor-pointer">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-semibold bg-white px-2 py-1 sm:px-3 sm:py-2 rounded-full'
                  : 'text-white hover:text-blue-400'
              }
            >
              {label}
            </NavLink>
             
          </li>
        ))}
        

           {/* Logout Button - sirf tab dikhao jab user logged in ho */}
        {token && (
          <li className="cursor-pointer">
            <button
              onClick={handleLogout}
               
              className=" border-2 border-red-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-red-700 transition font-semibold"
            >
              Logout
            </button>
            <ToastContainer 
             position="top-right"
          autoClose={3000}
          hideProgressBar={false}
            />
          </li>
          
        )}

        {/* Conditional: Show Profile if logged in */}
        {token && (
          <li className="cursor-pointer">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-white bg-green-500  font-semibold px-2 py-1 sm:px-3 sm:py-2 rounded-full'
                  : 'text-white hover:bg-green-400 hover:text-black rounded-2xl border-2 border-green-600 px-2 py-1 sm:px-3 sm:py-2'
              }
            >
              <FaUserAlt className="inline-block mr-1 mb-1" />
            </NavLink>
          </li>
        )}
         {/* Conditional: Show SignUp if NOT logged in */}
        {!token && (
          <li className="cursor-pointer">
            <NavLink
              to="/get-started"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold bg-green-600 px-2 py-1 sm:px-3 sm:py-2 rounded-full'
                  : 'text-white hover:text-blue-400'
              }
            >
              SignUp
            </NavLink>
          </li>
        )}


      </ul>
 

    </nav>
  );
}

export default Header;