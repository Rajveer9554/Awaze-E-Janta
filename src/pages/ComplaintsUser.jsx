/// admin can see all complaints of user 

import React, { useEffect, useState } from "react";
import API from "../api/axios";

const ComplaintsUser = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await API.get("/admin/complaints", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("COMPLAINT API RESPONSE 👉", res.data);

        // ✅ SAFE SET
        setComplaints(res.data.complaints || res.data || []);
      } catch (error) {
        console.error("Error fetching complaints", error);
        setComplaints([]);
      }
    };
    fetchComplaints();
  }, []);

  return (
    <div className="p-16">
      <h2 className="text-2xl font-bold mb-4">📊 All Complaints</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
            
              <th className="p-2">User</th>
              <th className="p-2">Email</th>
              <th className="p-2">Department</th>
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2">Phone No.</th>
              <th className="p-2">Address</th>
              <th className="p-2">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c._id} className="border-b hover:bg-gray-100">
                <td className="p-3">{c.userId?.username}</td>
                <td className="p-3">{c.userId?.email}</td>
                <td className="p-3">{c.department}</td>
                <td className="p-3">{c.title}</td>
                <td className="p-3">{c.description}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.address}</td>
                <td className="p-3">{new Date(c.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintsUser;
