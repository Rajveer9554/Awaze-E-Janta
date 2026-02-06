import React from "react";
import API from "../api/axios.js";
import { useNavigate } from "react-router";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async () => {
    try{
        const response = await API.post("/admin/login", {
            email,
            password
    })
    localStorage.setItem("adminToken", response.data.token);
    navigate("/admin/dashboard");
    }
    catch (err){
        alert("Login Failed! Please check your credentials."+(err.response?.data?.message || "Server Error"));
    }
};


  return (
<div className="flex items-center justify-center min-h-screen bg-linear-to-r from-purple-500 to-blue-500">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96" >
        <h2 className="text-2xl text-center text-indigo-700 text-semibold">
          🔐 Admin Login  
        </h2>
        <input
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className="w-full border p-2 mb-6 rounded"
        >
        </input>

        <input 
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        className="w-full border p-2 mb-6 rounded"
        >
        </input>
         <button onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
          Login
        </button>
    </div>
</div>

  );




};
export default AdminLogin;