


////new one 


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
    jobplace:"Developer of Awaze-E-Janata"
  },
  {
    name: "Aman Tiwari",
    photo: member2Photo,
    phone: "+91 8881946494",
    email: "tiwariamanhr@gmail.com",
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-visible rounded-3xl transition-transform"
          >
            {/* Gradient Glow behind each card */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-indigo-500 to-pink-500 blur-3xl opacity-60 -z-10 pointer-events-none transform scale-105 animate-gradient-bg"
            />

            {/* Actual white card content */}
            <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                src={member.photo}
                alt={member.name}
                className="h-28 w-28 rounded-full mb-4 object-cover"
              />
              <h2 className="font-semibold text-xl mb-2">{member.name}</h2>

              <a
                href={`tel:${member.phone}`}
                className="flex items-center gap-2 text-blue-600 font-medium mb-2 hover:underline"
              >
                <PhoneIcon className="h-5 w-5" />
                {member.phone}
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}&su=Hello&body=Hi%20${member.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 font-medium hover:underline"
              >
                <EnvelopeIcon className="h-5 w-5" />
                {member.email}
              </a>
              <div>
              <p className="text-black font-semibold mt-2">{member.jobplace}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full max-w-3xl rounded-3xl overflow-visible mb-16 gradient-shadow"
      >
        {/* Gradient shadow / glow behind form */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-indigo-500 to-pink-500 blur-3xl opacity-65 -z-10 pointer-events-none transform scale-102 animate-gradient-bg"
        />

        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Send Us a Message
          </h2>
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
              className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.25)]"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}



