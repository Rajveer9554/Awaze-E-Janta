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
    {
       id:4,
      title:"Track Complaints Status ",
      content:"Here you can easily track you Complaints",
      buttonText: "Track",
    },
    {
       id:5,
      title:"Category-wise complaints Filling ",
      content:"Here you can choose option of registered complaints",
      buttonText: "File Complaints",
    }
  ]

  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mt-20  '>


    {/* <div
          className="ww-full h-110 bg-cover bg-center shadow-lg  justify-center"
          style={
            {
              backgroundImage: `url('https://www.shutterstock.com/image-vector/group-people-signing-petition-lawyer-260nw-1846284889.jpg')`,
            }
          }
        ></div> */}


        {/* <div className='mt-2'>
        <h1 className='text-center font-bold text-2xl shadow-slate-400 shadow-full text-white bg-gray-500 rounded-lg mx-125 py-3'>
          Here are the ways to filed a Complaints
        </h1>
        </div> */}

        <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center   text-black"
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
            // bgImage={card.bgImage}
          />
        ))}
      </motion.div>
      </div>
  )
}

export default RegisterComplaints
