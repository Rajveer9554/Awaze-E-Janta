// import React from 'react';
// import { useState } from 'react';
// import UserProfie from './UserProfie';
// import Sidebar from '../Components/Sidebar.jsx';
// import { FiMenu, FiX } from "react-icons/fi";


// function UserDashboard() {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex flex-row overflow-hidden md:flex-row min-h-screen bg-gray-100">
//       {/* Sidebar (hidden on mobile, toggle later if needed) */}
//       <div className="hiden md:block">
//         <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto">
//         {activeTab === "profile" && <UserProfie />}
        
//       </main>
//     </div>
//   );

// }

// export default UserDashboard
import React, { useState } from 'react';
import UserProfie from './UserProfie';
import Sidebar from '../Components/Sidebar.jsx';
import { FiMenu, FiX } from "react-icons/fi";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
     {/* Mobile Hamburger Button - only visible on dashboard */}
      <button
        className="md:hidden p-4 text-2xl fixed top-16 left-2 z-50  text-black rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>


      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:translate-x-0 bg-gradient-to-b from-purple-500 to-blue-200 z-40`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 mt-16">
        {activeTab === "profile" && <UserProfie />}
        {/* Complaints tab bhi yaha add kar sakte ho */}
      </main>
    </div>
  );
}

export default UserDashboard;