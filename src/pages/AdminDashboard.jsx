import React, { useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import Usersdetails from "./Usersdetails.jsx";
import ComplaintsUser from "./ComplaintsUser.jsx";
import AdminDash from "../Components/AdminDash.jsx";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        {activeTab === "userdetails" && <Usersdetails />}
        {activeTab === "allcomplaints" && <ComplaintsUser />}
        {activeTab === "dashboard" && <AdminDash />}
      </div>
    </div>
  );
};

export default AdminDashboard;
