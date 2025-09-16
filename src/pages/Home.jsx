import { useState } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { CgBot } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import  {CardOne} from "../Components/Card";
import Header from "../Components/Header";

import { Link } from "react-router-dom";

// import Banner from "../Components/Banner";
// import Heading from "../components/Heading";

function Home() {
  const [services] = useState([
    {
      id: 1,
      title: "Easy to Use",
      content:
        "Simple form to submit complaints quickly",
      // buttonText: "Read More",
      icon: <LuCircleCheckBig  size={60} />,
      // bgImage:
      //   "https://media.istockphoto.com/id/183362998/photo/pot-hole-on-asphalt-road.jpg?s=1024x1024&w=is&k=20&c=ZZ_ootUGQh8kDIErgpayovXx_BnIE_hgnRar1zjLCjU=",
    },
    {
      id: 2,
      title: "AI Powered ",
      content:
        "Complaints automatically categorized and prioritized using AI",
      // buttonText: "Read More",
      icon: <CgBot size={60} />,
      // bgImage:
      //   "https://akm-img-a-in.tosshub.com/sites/indiacontent/0/images/product/public/27112019/00/01/57/48/54/56/29/26/1574854562926/659-garbage-being-dumped-along-the-iim-road-bypass-road-lucknow--pic-by-image-Garbage_takes_over_road_space__2.jpg",
    },
    {
      id: 3,
      title: "Track Progress",
      content:
        "Monitor status of your complaints anytime",
      // buttonText: "Read More",
      icon: <GiProgression size={60} />,
      // bgImage:
      //   "https://www.spinny.com/blog/wp-content/uploads/2025/02/traffic-jam_47b1a958-adc7-11e8-8465-1eef8cfbb700.jpg",
    },
    {
      id: 4,
      title: "Secure and Private",
      content:
        "Your data stays safe and confidential with us",
      // buttonText: "Read More",
      icon: <MdSecurity  size={60} />,
      // bgImage:
      //   "http://2.bp.blogspot.com/-spHtgfkqA7w/VeWmOMzsFaI/AAAAAAAAXBA/hMoayNviXXQ/s1600/lucknow%2Bchowk%2B2.jpg",
    },
    
  ]);
   console.log("Services data:", services);

  // data related register complaints and users active 

  const[data] = useState([
    {
      id:1,
      title:"Total Complaints",
      count:"1,234",
    },
    {
      id:2,
      title:"Active Users",
      count:"200",
    },
    {
      id:3,
      title:"Cities Covered",
      count:"100",
    },

  ]);
  

  return (
    <div className="">
      <div className=" flex flex-col  md:flex-row items-center justify-between mx-30 mt-2 ">
        {/*left me Banner Section  */}
        <div
          className="w-250 h-100 bg-cover bg-center flex items-center  justify-center"
          style={
            {
              backgroundImage: `url('https://img.freepik.com/free-vector/student-activism-abstract-illustration_335657-5342.jpg')`,
            }
          }
        ></div>

        {/* right me slogan ka div */}

        <div className=" px-30  flex flex-col gap-5 ">
          <h1 className="font-bold text-7xl text-blue-800 ">
            Riase Your voice
          </h1>
          <h2 
            className="font-bold text-6xl text-green-800 ">
            For a better city
          </h2>
          <h4 className="font-semibold text-3xl ">
            Report issues like garbage, street lights, or water supply and help improve your city with Al-powered complaint system.
          </h4>
        </div>
      </div>

      {/* <div className="m-5 rounded-full shadow-lg p-5 bg-blue-400">
        <h1 className="font-bold text-2xl text-center ">
          Raise you voice against local issues like broken roads, garbage
          problems, water logging, traffic jams, etc.
        </h1>
      </div> */}

      {/* Register Complaint Section */}
      <div className="flex flex-col bg-slate-300  md:flex-row items-center justify-between mt-10 mx-50 shadow-lg shadow-blue-800 rounded-full overflow-hidden">
        {/* Left Side Content */}
        <div className="flex items-center  justify-center  py-10 rounded-full  mx-0 my-0">
          {" "}
          <h2 className="flex flex-wrap justify-center font-poppins px-5 ">
            {" "}
            <span className="text-6xl animate-pulse font-bold text-blue-600">Share</span>{" "}
            <span className="text-3xl font-medium text-gray-800">your</span>{" "}
            <span className="text-5xl font-semibold text-red-600">
              complaint
            </span>{" "}
            <span className="text-2xl font-normal text-gray-500">
              here to help improve
            </span>{" "}
            <span className="text-5xl font-bold animate-spin  text-green-600">city</span>{" "}
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col  items-center justify-center rounded-full  p-11 ">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Have an issue in your area?
          </h2>
          <Link to="/register-complaints">
            <button className="text-xl font-bold bg-blue-600 rounded-full px-6 py-3 text-white shadow-md hover:bg-blue-700 transition">
              Register a Complaint
            </button>
          </Link>
        </div>
      </div>

      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center mt-10 text-blue-800">
          Why Choose Us?
        </h1>
      </div>

      {/* Services Section */}

      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  justify-items-center px-4 mx-30 "
        // style={{
        //   backgroundImage:
        //     "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fsocial')",
        // }}
      >
        {services.map((card) => (
          <CardOne
            key={card.id}
            title={card.title}
            content={card.content}
            // buttonText={card.buttonText}
            icon={card.icon}
            // bgImage={card.bgImage}
          />
        ))}
      </div>

      {/* kitna complaints regesitered hua, active,user,city coverd */}
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  justify-items-center px-2 mx-50 "
      >
        {data.map((card) => (
          <CardOne
            key={card.id}
            title={card.title}
            count={card.count}
            
            icon={card.icon}
            // bgImage={card.bgImage}
          />
        ))}
      </div>

      
    </div>
  );
}

export default Home;
