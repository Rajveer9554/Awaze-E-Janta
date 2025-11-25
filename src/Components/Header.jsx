import React from 'react'
import {Link, NavLink} from 'react-router-dom';
// import MyButton from './MyButton';




function Header() {
  return (
    // (z-50)=> use =>Ye navbar ko hamesha sab elements ke upar rakhega (scroll par bhi
    <nav className='fixed top-0 left-0 w-full z-50 bg-blue-900 flex justify-between items-center h-16 px-4 sm:px-8 md:px-16 lg:px-32'>

        <div className='brand_logo'>
          <span className='font-extrabold text-white text-xl sm:text-2xl md:text-3xl '> Awaze-E-Janata</span>
        </div>
        {/* Navigation Links */}

        <div className='flex min-w-0 items-center'>
            <ul className='flex flex-nowrap gap-2 sm:gap-4 md:gap-6 items-center text-xs sm:text-base md:text-base  '>
                <li className=' cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold px-1 py-1 sm:px-2 sm:py-2   bg-white rounded-full ":"text-white"}
                    >Home</NavLink>
                </li>
                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/about-us"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-1 py-1 sm:px-2 sm:py-2 rounded-full ":"text-white"}>
                      About</NavLink>
                </li>
                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/contact-us"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-2 py-2 sm:px-3 sm:py-2 rounded-full  ":"text-white"}>
                      Contact</NavLink>
                </li>
                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/register-complaints"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-2 py-2 sm:px-3 sm:py-2 rounded-full  ":"text-white"}>
                      Complaint</NavLink>
                </li>

                <li className='cursor-pointer hover:text-blue-400 text-white'>
                    <NavLink to="/get-started"
                    className={({isActive}) =>
                    isActive? "text-black font-semibold  bg-white px-2 py-2 sm:px-3 sm:py-2 rounded-full  ":"text-white"}>
                      SignUp</NavLink>
                </li>
                
            </ul>
            
        
        </div>
    </nav>
      
      
      
      
      
  )
}

export default Header
