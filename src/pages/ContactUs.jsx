// import React from "react";
// import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
// import { ChevronDownIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
// import {
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   ArrowPathIcon,
// } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";

// const solutions = [
//   { name: "Analytics", description: "Understand your traffic", href: "#", icon: ChartPieIcon },
//   { name: "Engagement", description: "Speak to your customers", href: "#", icon: CursorArrowRaysIcon },
//   { name: "Security", description: "Data will be safe", href: "#", icon: FingerPrintIcon },
//   { name: "Integrations", description: "Connect tools", href: "#", icon: SquaresPlusIcon },
//   { name: "Automations", description: "Build conversion funnels", href: "#", icon: ArrowPathIcon },
// ];

// export default function ContactUs() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex flex-col items-center pt-32 px-5 md:px-20">
//       {/* Heading */}
//       <motion.h1
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl font-bold text-center mb-10 text-blue-900"
//       >
//         Contact Us
//       </motion.h1>

//       {/* Info Cards */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16"
//       >
//         <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
          
//            {/* Call Us */}
//   <a
//     href="tel:+91 9554120959"
//     // className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
//   >
//     <PhoneIcon className="h-12 w-12 text-blue-600 mb-4" />
//     <h2 className="font-semibold text-xl mb-2">Call Us</h2>
//     <p className="text-gray-600">+91 9554120959</p>
//   </a>
//         </div>
//         <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
//           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajveer786067@gmail.com&su=Support%20Request&body=Hello%20Team">
//           <EnvelopeIcon className="h-12 w-12 text-green-600 mb-4" />
//           <h2 className="font-semibold text-xl mb-2">Email</h2>
//           <p className="text-gray-600">rajveer786067@gmail.com</p>
//           </a>
//         </div>
//         <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
//           <ChartPieIcon className="h-12 w-12 text-purple-600 mb-4" />
//           <h2 className="font-semibold text-xl mb-2">Solutions</h2>
//           <Popover className="relative mt-2">
//             <PopoverButton className="inline-flex items-center gap-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
//               Explore
//               <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
//             </PopoverButton>

//             <PopoverPanel className="absolute z-10 mt-2 w-72 bg-white rounded-2xl shadow-lg p-4">
//               {solutions.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={item.name}
//                     className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
//                   >
//                     <Icon className="h-5 w-5 text-blue-600" />
//                     <div>
//                       <p className="font-semibold">{item.name}</p>
//                       <p className="text-sm text-gray-500">{item.description}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </PopoverPanel>
//           </Popover>
//         </div>
//       </motion.div>

//       {/* Contact Form */}
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Send Us a Message</h2>
//         <form className="flex flex-col gap-5">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             placeholder="Your Message"
//             className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

// Local photos import
import rajveerPhoto from "../assets/rajveer.jpg";
import member2Photo from "../assets/aman.jpg";
import member3Photo from "../assets/raj.jpg";

// Team Members Data
const team = [
  {
    name: "Rajveer Pratap Singh",
    photo: rajveerPhoto,
    phone: "+91 9554120959",
    email: "rajveer786067@gmail.com",
   
  },
  {
    name: "Aman Tiwari",
    photo: member2Photo,
    phone: "+91 8881946494",
    email: "member2@example.com",
  },
  {
    name: "Raj Yadav",
    photo: member3Photo,
    phone: "+91 99887 66554",
    email: "member3@example.com",
  },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex flex-col items-center pt-32 px-5 md:px-20">
      {/* Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-10 text-blue-900"
      >
        Contact Our Team
      </motion.h1>

      {/* Team Members */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16  "
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center transition-transform shadow-blue-900 "
          >
            {/* Photo */}
            <img
              src={member.photo}
              alt={member.name}
              className="h-28 w-28 rounded-full mb-4 object-cover "
            />
            {/* Name */}
            <h2 className="font-semibold text-xl mb-2">{member.name}</h2>
            {/* Clickable Phone */}
            <a
              href={`tel:${member.phone}`}
              className="flex items-center gap-2 text-blue-600 font-medium mb-2 hover:underline"
            >
              <PhoneIcon className="h-5 w-5" />
              {member.phone}
            </a>
            {/* Clickable Email */}
            <a
             href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}&su=Hello&body=Hi%20${member.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 font-medium hover:underline"
            >
              <EnvelopeIcon className="h-5 w-5" />
              {member.email}
            </a>
          </motion.div>
        ))}
      </motion.div>

       {/* Contact Form */}
      <motion.div
     initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10 mb-15 shadow-blue-900"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Send Us a Message</h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}