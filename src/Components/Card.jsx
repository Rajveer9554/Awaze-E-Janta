import React, { memo,useRef } from "react";
import { Link } from "react-router-dom";

export const CardOne=memo (function CardOne({
title,count,content,icon,isActive,onHover,onLeave
}){
  const cardRef =useRef();
  const handleMove=(e)=>{
    const rect =cardRef.current.getBoundingClientRect();
    const x =e.clientX - rect.left;
    const y=e.clientY - rect.top;
     const centerX=rect.width/2;
     const centerY=rect.height/2;
     const rotateX=((y-centerY)/centerY)*10;
     const rotateY=((x-centerX)/centerX)*10;
     const hue =(x/rect.width)*360;
     const lightColor =`hsla(${hue},100%,85%,0.6)`;

     //transform
     cardRef.current.style.transform =`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
     // color change only active card
     cardRef.current.style.background = `
      radial-gradient(circle at ${x}px ${y}px, ${lightColor}, transparent 45%),
      linear-gradient(135deg, #ec4899, #8b5cf6, #6366f1)`;

      //glow
     cardRef.current.style.boxShadow =` 0 30px 60px rgba(0,0,0,0.4),
      0 0 40px ${lightColor}`;

  };

const reset = () => {
    // 🔄 back to default
    cardRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";

    cardRef.current.style.background = "";

    cardRef.current.style.boxShadow = "";
  };
  return(
    <div 
    ref={cardRef}
    onMouseEnter={onHover}
    onMouseMove={handleMove}
    onMouseLeave={()=>{
      onLeave();
      reset();
    }}
    className={`rounded-2xl p-6 w-75 h-65 m-9 flex flex-col items-center  text-white bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-blue-500 transition-transform duration-300 
      ${
      isActive ?   "bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 scale-105 shadow-2xl"
          : "bg-linear-to-r from-green-400 to-gray-500 scale-100 opacity-80"
    }`}
    >
       <div className="text-4xl mb-4">{icon}</div>

      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg">{content}</p>
      <p className="text-3xl font-semibold">{count}</p>

    </div>
  )
});




//// registercomplaint card
export const CardTwo = memo(function CardTwo({
  title,
  content,
  icon,
  count,
  buttonText,
  path,
}) {
  return (
    <div
      className="  rounded-2xl p-6  w-85 h-65 m-9 flex flex-col items-center text-black bg-white shadow-lg shadow-blue-500 "
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div> */}

      <div className="relative z-10 flex flex-col items-center  ">
        <div className="mb-4 text-yellow-300">{icon}</div>
        <h2 className="text-xl  font-bold mb-5 text-center">{title}</h2>
        <p className="text-xl font-light text-center mb-4">{content}</p>
        <p className="text-4xl font-semibold text-center mb-4">{count}</p>

<Link to={path}>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:shadow cursor-pointer hover:bg-blue-600 transition">
          {buttonText}
        </button>
        </Link>
      </div>
    </div>
  );
});

//// tracking card 

export const CardThree = memo(function CardThree({
  title,
  content,
  icon,
  count,
  buttonText,
}) {
  return (
    <div
      className="  rounded-2xl p-6  m-9 flex flex-col items-center text-black bg-white shadow-lg shadow-blue-500 "
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div> */}

      <div className="relative z-10 flex flex-col items-center  ">
        <div className="mb-4 text-yellow-300">{icon}</div>
        <h2 className="text-2xl  font-bold mb-5 text-center">{title}</h2>
        <p className="text-xl font-semibold text-center mb-4">{content}</p>
        <p className="text-4xl font-semibold text-center mb-4">{count}</p>


        <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:shadow cursor-pointer hover:bg-blue-600 transition">
          {buttonText}
        </button>
        
      </div>
    </div>
  );
});



