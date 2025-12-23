import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios.js";
import { ToastContainer, toast } from "react-toastify";

function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");
 // ✅ YAHAN PASTE KARO
//   console.log("VERIFY EMAIL:", email);
//   console.log("VERIFY OTP:", otp);


    if (!email) {
      toast.error("Email not found. Please register again.");
      return navigate("/get-started");
    }

    try {
      const res = await API.post("/otp/verify-otp", { email, otp });
      console.log("OTP RESPONSE:", res.data);

      toast.success(res.data.message || res.data.msg);

      if (res.data.message === "OTP Verified" || res.data.msg?.includes("User verified")) {
        console.log("navigate matched")
        setTimeout(() => {
          navigate("/register-complaints");
        }, 800);
      }
    } catch (err) {
      toast.error(err.msg || "OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="bg-white/90 shadow-xl rounded-xl p-6 w-full max-w-sm border border-gray-100">
        <h2 className="text-xl font-bold text-center mb-6">Verify OTP</h2>

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-3 py-2 rounded-lg border border-gray-300"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg"
          >
            Verify OTP
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Otp;