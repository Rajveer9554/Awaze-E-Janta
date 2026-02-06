

// Admin con see all user details

import React, { useEffect } from 'react'
import API from "../api/axios.js";
import { useState } from 'react';

function Usersdetails() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
           try {
        const token = localStorage.getItem("adminToken");

        const response = await API.get("/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("API RESPONSE 👉", response.data);

        // ✅ SAFE SET
        setUsers(response.data.users || response.data || []);
      } catch (error) {
        console.error("Error fetching users", error);
        setUsers([]);
      }
    };
            fetchUsers();
    }, []);


  return (
    <div className='mt-16 '>
      <h2 className='text-2xl font-bold mb-4 '>
       👥 All Users
      </h2>
      <div className='overflow-x-auto'>
        {/* Table to display user details */}
        <table className='min-w-full bg-white border border-gray-300'>
            <thead className='bg-indigo-500 text-white'>
                <tr>
                    <th className='py-2 px-4 border-b border-gray-300'>User ID</th>
                    <th className='py-2 px-4 border-b border-gray-300'>Name</th>
                    <th className='py-2 px-4 border-b border-gray-300'>Email</th>
                    <th className='py-2 px-4 border-b border-gray-300'>Age</th>
                    <th className='py-2 px-4 border-b border-gray-300'>Gender</th>
                    <th className='py-2 px-4 border-b border-gray-300'>Verified User</th>
                    <th className='py-2 px-4 border-b border-gray-300'>Created Date</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => 
                <tr key={user.id} className='text-center'>
                    <td className='py-2 px-4 border-b border-gray-300'>{user._id}</td>
                    <td className='py-2 px-4 border-b border-gray-300'>{user.username}</td>
                    
                    <td className='py-2 px-4 border-b border-gray-300'>{user.email}</td>
                    <td className='py-2 px-4 border-b border-gray-300'>{user.age}</td>
                    <td className='py-2 px-4 border-b border-gray-300'>{user.gender}</td>
                    <td className='py-2 px-4 border-b border-gray-300 text-green-500 '> <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.isVerified
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.isVerified ? "Yes" : "No"}
                      </span></td>
                    <td className='py-2 px-4 border-b border-gray-300'>{user.createdAt}</td>
                </tr>
                )}
            </tbody>    
            </table>
      </div>
    </div>
  )
}

export default Usersdetails
