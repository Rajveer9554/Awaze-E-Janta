import React from 'react';
import { FiUser, FiFileText } from "react-icons/fi";

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-linear-to-b from-purple-500 to-blue-200 text-white flex flex-col p-6 h-screen sticky top-0 ">
        
      {/* <h2 className="text-2xl font-bold mb-8">Awaze-E-Janata</h2> */}
      <div className="flex items-center justify-center h-20 border-b-2 border-blue-900">
        <h2 className="text-2xl font-extrabold mt-10 tracking-wide">Awaze-E-Janata</h2>
      </div>

      <nav className="flex flex-col gap-4 mt-5">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
            activeTab === "profile"
              ? "bg-white text-blue-900 font-semibold"
              : "hover:bg-blue-700"
          }`}
        >
          <FiUser /> User Profile
        </button>
        <button
          onClick={() => setActiveTab("complaints")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
            activeTab === "complaints"
              ? "bg-white text-blue-900 font-semibold"
              : "hover:bg-blue-700"
          }`}
        >
         <FiFileText />  Complaints
        </button>
      </nav>
    </aside>
  );
}


export default Sidebar
