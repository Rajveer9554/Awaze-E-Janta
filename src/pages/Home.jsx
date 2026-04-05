

import { useState, useEffect, useMemo,lazy,Suspense } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { CgBot } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { CardOne } from "../Components/Card.jsx";
import { FaRegListAlt, FaUsers, FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner2 from "../assets/banner2.webp";
import API from "../api/axios.js";


const Banner = lazy(() => import("./Banner.jsx"));

function Home() {
  const services = useMemo(() =>[
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
  ], []);
  
   const [activeCard, setActiveCard] = useState(null);
  // stats state
  const [stats, setStats] = useState({
    totalComplaints: 0,
    activeUsers: 0,
    
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch stats from backend API
    // using Cache and Isse har refresh pe API hit nahi hogi.
    const cachedStats = sessionStorage.getItem("stats");
    if(cachedStats){
      setStats(JSON.parse(cachedStats));
    }
    const fetchStats = async () => {
      try{
        const response= await API.get("/stats");

        const newStats ={
          totalComplaints: response.data.totalComplaints,
          activeUsers: response.data.activeUsers,
        };
        setStats(newStats);
        sessionStorage.setItem("stats", JSON.stringify(newStats));
      }catch(error){
        console.error("Error fetching stats:", error);
        }
      };
    fetchStats();
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
const data = useMemo(() => [
  { id: 5, title: "Total Complaints", count: stats.totalComplaints, icon: <FaRegListAlt size={60} /> },
  { id: 6, title: "Active Users", count: stats.activeUsers, icon: <FaUsers size={60} /> },
  { id: 7, title: "Cities Covered", count: "1", icon: <FaCity size={60} /> },
], [stats]);


  return (
    <div className="w-full overflow-hidden mt-7">
      
       <h1 className="mt-10 text-center text-2xl mb-5 font-bold ">Awaze-E-Janta – Voice of the People</h1>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between mt-auto lg:px-20 lg:mb-10  mb-10 gap-5 md:gap-10">

        {/* Image */}
        <div className="w-full   ">
            <Suspense fallback={<div>Loading...</div>}>
          <Banner />
          </Suspense>
        </div>
        

        {/* Text */}
        <div className="w-full md:w-full px-5 md:px-10 text-center md:text-left md:mb-5 space-y-1 ">
          <h2 className="font-bold text-4xl md:text-7xl text-blue-800">Raise Your Voice</h2>
          <h2 className="font-bold text-3xl md:text-6xl text-green-800">For a Better City</h2>
          <p className="text-xl md:text-2xl font-semibold">
            Report issues like garbage, street lights, water supply etc. with our AI-powered system.
          </p>
             <p className="mt-6 px-5 md:px-10 text-lg text-gray-700">
  Learn more about 
  <Link to="/about-us" className="text-blue-600 underline font-medium ml-1">
    Awaze-E-Janta
  </Link>
  , explore current 
  <Link to="/register-complaints" className="text-blue-600 underline font-medium ml-1">
    public issues
  </Link>
  or 
  <Link to="/contact-us" className="text-blue-600 underline font-medium ml-1">
    contact us
  </Link>
  .
</p>

        </div>
           

      </div>

      {/* Complaint Section */}
      <div className="bg-slate-300 rounded-3xl shadow-xl mx-5 md:mx-10 p-5 md:p-10 flex flex-col mb-10 md:flex-row items-center justify-between">

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
    blur-md opacity-40
    group-hover:opacity-100 transition duration-500">
  </div>

  {/* Banner Image */}
  {/* <img
    src={banner2}
    alt="banner"
    loading="eager"
    width="800"
    height="500"
    className="relative w-full md:w-full rounded-3xl "
  /> */}

</div>


      {/* SERVICES */}
      <h2 className="text-4xl font-bold text-center mt-16 text-blue-800">Why Choose Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-5 md:px-20 mt-10">
        {services.map((card) => (
          <CardOne key={card.id} title={card.title} content={card.content} icon={card.icon} 
          isActive={activeCard === card.id}
          onHover={() => setActiveCard(card.id)}
          onMouseEnter={() => setActiveCard(card.id)}
          onLeave={() => setActiveCard(null)}/>
        ))}
      </div>

      {/* STATS */}
      <h2 className="text-3xl font-bold text-center mt-20">Har Complaint Behtar Kal Ki Aur 👣🌱</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20 mt-10">
        {data.map((card) => (
          <CardOne key={card.id} title={card.title} count={card.count} icon={card.icon} 
          isActive={activeCard==card.id} onHover={()=> setActiveCard(card.id)} onLeave={()=> setActiveCard(null)}/>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <section className="mt-20 px-5">
        <h2
          className="text-center text-3xl md:text-4xl font-bold "
          
        >
          📢 Awaze-e-Janata: Badlaav Ki Shuruaat
        </h2>

        {/* <div className="mx-auto mt-10 max-w-3xl bg-white/70 p-8 rounded-2xl shadow-2xs shadow-blue-500 backdrop-blur-xl"> */}
          
            <div
             className="mx-auto mt-10 max-w-3xl bg-white/70 p-8 rounded-2xl shadow shadow-blue-500"
            >
              <p className="text-xl text-center">“{testimonials[activeTestimonial].quote}”</p>
            </div>
          
        
      </section>

      {/* CTA */}
      <section className="mt-20 px-5 mb-10">
        <div className="bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-1px rounded-3xl shadow-xl">
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
