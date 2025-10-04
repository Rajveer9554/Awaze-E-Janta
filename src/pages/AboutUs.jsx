import React from "react";
import { useEffect } from "react";
import { Users, Target, Award } from "lucide-react";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 text-gray-800 mt-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 text-center">
        <h1 className="text-6xl animate-pulse font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          We provide a platform for citizens to raise complaints like broken
          roads, drainage issues, or streetlight problems. Together, we aim to
          create cleaner and safer cities.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-25 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4x63DpZKV90rUBrJ6GUNFbKlEicvlpbuGpg&s"
            alt="Complaint Illustration"
            className="rounded-2xl h-90 rounded-full shadow-lg hover:shadow-xl shadow-blue-400 transition"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold animate-pulse mb-6">📌Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our mission is to empower citizens by giving them a voice to report
            problems in their locality. Whether it’s a broken road, garbage
            issue, or water leakage – we ensure your complaint reaches the
            concerned authorities.
          </p>
          <h2 className="text-3xl font-extrabold animate-pulse mb-4">📌Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We envision a transparent, responsive, and cleaner society where
            every citizen contributes to better living standards.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Citizen Friendly</h3>
            <p className="text-gray-600">
              Easy-to-use complaint system designed for every citizen.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
            <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Quick Action</h3>
            <p className="text-gray-600">
              Your complaints are forwarded to the right department instantly.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
            <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Trusted Platform</h3>
            <p className="text-gray-600">
              Reliable system to ensure transparency & accountability.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
