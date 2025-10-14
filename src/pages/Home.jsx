import { useState, useEffect, useMemo } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { CgBot } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import  {CardOne} from "../Components/Card.jsx";
import { FaRegListAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCity } from "react-icons/fa";




import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const testimonials = useMemo(
    () => [
      {
        quote:
          "📢🌱 Awaze-e-Janata: Aaj ki awaaz, kal ki safaai.",
        
      },
      {
        quote:
          "🔄✨ Chhoti si aadat, badi badlaav ki shuruaat.",
        
      },
      {
        quote:
          "🏙️✨ Safai se hi samriddhi hai – Apna shehar, apni zimmedari.",
       
      },
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

  const[data] = useState([
    {
      id:1,
      title:"Total Complaints",
      count:"1,234",
      icon:<FaRegListAlt size={60}/>,
    },
    {
      id:2,
      title:"Active Users",
      count:"200",
      icon:<FaUsers size={60}/>,
    },
    {
      id:3,
      title:"Cities Covered",
      count:"100",
      icon:<FaCity size={60}/>,

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
      <div className="mt-30">
        <h1 className="text-4xl font-bold text-center mt-10 text-blue-800">
          Why Choose Us?
        </h1>
      </div>

      {/* Services Section */}

      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  justify-items-center px-4 mx-30 animate-pulse "
        
        
        style={{
          backgroundImage:
            "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fsocial')",
        }}
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
      {/* Heading */}
      <div className="mt-30 ">
        <h1 className="text-4xl font-bold text-center  border-t-4 b border-b-10  rounded-full mx-29 py-3  text-black border-blue-800 ">
          Har Complaint, Ek Kadam Behtar Kal Ki Aur 👣🌱
        </h1>
      </div>

      {/* kitna complaints regesitered hua, active,user,city coverd */}
      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  justify-items-center animate-pulse px-2 mx-50 "
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

      {/* Testimonials Section */}
      <section className="relative ">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          >
          📢 Awaze-e-Janata: Badlaav Ki Shuruaat
          </motion.h2>

          <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-white/70 p-8 text-center shadow-xl shadow-blue-500/50  ring-1 ring-black/5 backdrop-blur-xl ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[activeTestimonial].rating
                          ? "fill-yellow-400 stroke-yellow-400"
                          : "stroke-yellow-400"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-5 text-lg text-gray-700">
                  “{testimonials[activeTestimonial].quote}”
                </p>
               
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === activeTestimonial
                      ? "bg-indigo-600"
                      : "bg-indigo-200 hover:bg-indigo-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative ">
        <div className="mx-auto max-w-6xl px-6 py-20 ">
          <div className="overflow-hidden rounded-3xl shadow-blue-900  bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px] shadow-2xl">
            <div className="rounded-3xl bg-white/60 p-10 text-center backdrop-blur-xl">
              <motion.h3
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInUp}
              >
                Your Complaints Can Transform Your City! 🌍💡
              </motion.h3>
              <p className="mx-auto mt-3 max-w-2xl text-gray-700">
                Join thousands using AI to Report, Resolve, and Revive your city 🏙️💡.
              </p>
              <div className="mt-8">
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-indigo-500"
                >
                  Sign Up Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
