import React, { useEffect, useState } from "react";
import API from "../api/axios";

const UserComplaintsDashboard = ({ userId }) => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
  const fetchSummary = async () => {
    try {
      const res = await API.get(`/complaints/summary/${userId}`);
      setSummary(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  fetchSummary();
}, [userId]);

 if (!summary) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">📊 My Complaints Summary</h2>

      <p className="mb-4">Total Complaints: <strong>{summary.totalComplaints}</strong></p>

      <h3 className="text-lg font-semibold mb-2">Complaints by Department:</h3>
      <ul className="list-disc pl-6">
        {Object.entries(summary.departmentCounts).map(([dept, count]) => (
          <li key={dept}>{dept}: {count}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">All Complaints:</h3>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-2 text-left">Department</th>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {summary.complaints.map((c) => (
            <tr key={c._id} className="border-b">
              <td className="p-3">{c.department}</td>
              <td className="p-3">{c.title}</td>
              <td className="p-3">{c.description}</td>
              <td className="p-3">{new Date(c.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserComplaintsDashboard;