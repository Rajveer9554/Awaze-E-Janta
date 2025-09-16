import React from 'react'
import {Link, NavLink} from 'react-router-dom';
// import MyButton from './MyButton';




function Header() {
  return (
    // (z-50)=> use =>Ye navbar ko hamesha sab elements ke upar rakhega (scroll par bhi
    <nav className='fixed top-0 left-0 w-full z-50 bg-blue-900 flex justify-between items-center h-17 px-32'>

        <div className='brand_logo'>
          <span className='font-extrabold text-white text-3xl'> Awaze-E-Janata</span>
        </div>
        <div className='flex gap-5 items-center'>
            <ul className='flex gap-5 items-center'>
                <li className=' cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold px-2 py-2  bg-white rounded-full ":"text-white"}
                    >Home</NavLink>
                </li>
                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/about-us"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-2 py-2 rounded-full ":"text-white"}>
                      About Us</NavLink>
                </li>
                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/contact-us"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-2 py-2 rounded-full  ":"text-white"}>
                      Contact Us</NavLink>
                </li>
                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/register-complaints"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-2 py-2 rounded-full  ":"text-white"}>
                      Register Complaints</NavLink>
                </li>

                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/get-started"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-2 py-2 rounded-full  ":"text-white"}>
                      Get Started</NavLink>
                </li>
            </ul>
            
        
        </div>
    </nav>
      
      
        
      
      
  )
}

export default Header
