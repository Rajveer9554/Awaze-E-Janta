

import { useState, useEffect, useMemo } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { CgBot } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { CardOne } from "../Components/Card.jsx";
import { FaRegListAlt, FaUsers, FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";
import {  motion,AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Banner from "./Banner.jsx";
import banner2 from "../assets/banner2.png";
import API from "../api/axios.js";

function Home() {
  const [services] = useState([
    {
      id: 1,
      title: "Easy to Use",
      content: "Simple form to submit complaints quickly",
      icon: <LuCircleCheckBig size={60} />,
    },
    {
      id: 2,
      title: "AI Powered",
      content: "Complaints automatically categorized using AI",
      icon: <CgBot size={60} />,
    },
    {
      id: 3,
      title: "Track Progress",
      content: "Monitor status of your complaints anytime",
      icon: <GiProgression size={60} />,
    },
    {
      id: 4,
      title: "Secure and Private",
      content: "Your data stays safe and confidential",
      icon: <MdSecurity size={60} />,
    },
  ]);
  // stats state
  const [stats, setStats] = useState({
    totalComplaints: 0,
    activeUsers: 0,
    
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch stats from backend API
    const fetchstats = async() =>{
      try {
        const res = await API.get("/stats");
         setStats({
        totalComplaints: res.data.totalComplaints,
        activeUsers: res.data.activeUsers
      });

    } catch (error) {
        console.error("Error fetching stats:", error);
    }
  }; fetchstats();
  },
   []);

  const testimonials = useMemo(
    () => [
      { quote: "📢🌱 Awaze-e-Janata: Aaj ki awaaz, kal ki safai." },
      { quote: "🔄✨ Chhoti si aadat, badi badlaav ki shuruaat." },
      { quote: "🏙️✨ Safai se hi samriddhi hai – Apna shehar, apni zimmedari." },
    ],
    []
  );

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // ✅ derive data from stats (not useState)
const data = [
  { id: 1, title: "Total Complaints", count: stats.totalComplaints, icon: <FaRegListAlt size={60} /> },
  { id: 2, title: "Active Users", count: stats.activeUsers, icon: <FaUsers size={60} /> },
  { id: 3, title: "Cities Covered", count: "100", icon: <FaCity size={60} /> },
];


  return (
    <div className="w-full overflow-hidden mt-7">

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-col items-center justify-between mt-auto gap-5 md:gap-10">

        {/* Image */}
        <div className="w-full md:w-full">
          {/* <img
            src="https://img.freepik.com/free-vector/student-activism-abstract-illustration_335657-5342.jpg"
            alt="banner"
            className="w-full rounded-lg"
          /> */}
          <Banner />
        </div>
        

        {/* Text */}
        <div className="w-full md:w-full px-5 md:px-10 text-center md:text-left md:mb-5 space-y-1 ">
          <h1 className="font-bold text-4xl md:text-7xl text-blue-800">Raise Your Voice</h1>
          <h2 className="font-bold text-3xl md:text-6xl text-green-800">For a Better City</h2>
          <p className="text-xl md:text-2xl font-semibold">
            Report issues like garbage, street lights, water supply etc. with our AI-powered system.
          </p>
        </div>

      </div>

      {/* Complaint Section */}
      <div className="bg-slate-300 rounded-3xl shadow-xl mx-5 md:mx-10 p-5 md:p-10 flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-center text-3xl md:text-5xl font-bold space-x-2">
          <span className="text-blue-600">Share</span>
          <span className="text-gray-800">your</span>
          <span className="text-red-600">complaint</span>
          <span className="text-gray-500 text-2xl md:text-4xl">now</span>
        </h2>

        <div className="mt-6 md:mt-0">
          <Link to="/register-complaints">
            <button className="text-xl font-bold bg-blue-600 rounded-full px-6 py-3 text-white hover:bg-blue-700 transition">
              Register a Complaint
            </button>
          </Link>
        </div>

      </div>

      {/* <div className="w-full md:w-1/2  mx-auto mt-10 ">
          <img
            src={banner2}
            alt="banner"
            className="w-full rounded-lg"
          />
          
        </div> */}
        <div className="w-full md:w-1/2 mx-auto mt-7 md:mt-10 relative group  ">
  
  {/* Gradient Glow Border */}
  <div className="absolute -inset-1 rounded-xl 
    bg-linear-to-r from-pink-500 via-purple-500 to-blue-500
    blur-md opacity-70
    group-hover:opacity-100 transition duration-500">
  </div>

  {/* Banner Image */}
  <img
    src={banner2}
    alt="banner"
    className="relative w-full md:w-full rounded-3xl "
  />

</div>


      {/* SERVICES */}
      <h1 className="text-4xl font-bold text-center mt-16 text-blue-800">Why Choose Us?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-5 md:px-20 mt-10">
        {services.map((card) => (
          <CardOne key={card.id} title={card.title} content={card.content} icon={card.icon} />
        ))}
      </div>

      {/* STATS */}
      <h1 className="text-3xl font-bold text-center mt-20">Har Complaint Behtar Kal Ki Aur 👣🌱</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20 mt-10">
        {data.map((card) => (
          <CardOne key={card.id} title={card.title} count={card.count} icon={card.icon} />
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section className="mt-20 px-5">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold "
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
        >
          📢 Awaze-e-Janata: Badlaav Ki Shuruaat
        </motion.h2>

        <div className="mx-auto mt-10 max-w-3xl bg-white/70 p-8 rounded-2xl shadow-lg backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xl text-center">“{testimonials[activeTestimonial].quote}”</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 px-5 mb-10">
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px] rounded-3xl shadow-xl">
          <div className="bg-white/60 p-10 rounded-3xl text-center backdrop-blur-xl">
            <h3 className="text-3xl md:text-4xl font-bold">
              Your Complaints Can Transform Your City 🌍💡
            </h3>
            <p className="mt-3">Join thousands using AI for a better city.</p>
            <Link to="/get-started">
              <button className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Sign Up Free
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
