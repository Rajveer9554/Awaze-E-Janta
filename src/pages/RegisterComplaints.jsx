import React, { useState } from 'react'
import {CardTwo} from '../Components/Card.jsx';
import { useEffect } from 'react';
import { motion } from "framer-motion";


function RegisterComplaints() {

  const [complaints]=useState([
    {
       id:1,
      title:"Complaints Mannually",
      content:"Here you can easily registered a complaints through mannually",
      buttonText: "File Complaints",
      path:"/complaint-mannually"
    },
    {
       id:2,
      title:"Complaints through AI",
      content:"Here you can easily registered a complaints through AI",
      buttonText: "File Complaints",
    },
    {
       id:3,
      title:"Complaints through Voice & Video ",
      content:"Here you can easily registered a complaints with Voice & Video",
      buttonText: "File Complaints",
    },
    // {
    //    id:4,
    //   title:"Track Complaints Status ",
    //   content:"Here you can easily track you Complaints",
    //   buttonText: "Track",
    // },
    
  ])
  ///tracking complaints
  const [tracking]=useState([
    {
       id:1,  
      title:"Track by Complaint ID",
      content:"Here you can easily track your complaints by Complaint ID",
      buttonText: "Track Now",
    }
  ]
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mt-25 '>


   


        {/* <div className='mt-2 '>
        <h1 className='text-center font-bold text-2xl shadow-slate-400 shadow-full text-white bg-gray-500 rounded-lg mx-125 py-3'>
          Here are the ways to filed a Complaints
        </h1>
        </div> */}

       
        <div className="flex flex-col w-full h-60 bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 rounded-b-3xl shadow-lg shadow-blue-500  items-center justify-center mb-10">
          <h1 className=' text-4xl text-black font-extrabold'>
            Welcome to Awaze-E-Janata
            </h1>
            <p className='py-10 text-2xl text-black font-light'>
              Submit your complaints easily and quickly through our user-friendly platform.
            </p>
        </div>
       

        <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center  mt-25 text-black"
      > Here are the ways to filed a Complaints
       
      </motion.h1>

    <motion.div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10   justify-items-center px-4 mx-50 "
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 1, opacity: 3 }}
        transition={{ duration: 4.8 }}
        
      >
        {complaints.map((card) => (
          <CardTwo
            key={card.id}
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            icon={card.icon}
            path={card.path}
             
            // bgImage={card.bgImage}
          />
          
        ))}
      </motion.div>

      <h1  className="text-7xl font-medium text-center mt-25  text-black"
      > Here is the Tracking Section

      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10   justify-items-center px-180  ">
        {tracking.map((card) => (
          <CardTwo
            key={card.id} 
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            icon={card.icon}  
             />
        ))}

      </div>
      </div>
  )
}

export default RegisterComplaints
