import React from 'react'
import adminpagepic from '../assets/adminpagepic.png';
import { useEffect } from 'react';

function AdminDash() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='mt-15'>
      <h2 className='text-2xl font-bold justify-center items-center text-center text-green-600 bg-black rounded-full px-3 py-1' >
        Welcome to Admin Dashboard
      </h2>
      <div>
        <img className='mx-auto h-screen mt-10 ' 
        src={adminpagepic} 
        alt="Admin Dashboard" />    
      </div>
    </div>
  )
}

export default AdminDash
