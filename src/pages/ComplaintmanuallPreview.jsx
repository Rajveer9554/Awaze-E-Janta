

import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import API from "../api/axios";
import { ToastContainer, toast } from "react-toastify";

const ComplaintPreview = () => {
  const { state } = useLocation();
  const { name, mobile, email, title, description, department, location } = state || {};
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  // const handleSendComplaint = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await fetch("http://localhost:8081/api/complaints/send", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(state) // send complaint data to backend
  //     });

  //     const data = await res.json();
  //     setMessage(data.message);
  //   } catch (error) {
  //     setMessage("❌ Failed to send complaint. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
    const handleSendComplaint = async () => {
    try {
      setLoading(true);

      // Axios instance se POST request
      const res = await API.post("/complaints/send", state);

      // Axios response me data directly hota hai
      setMessage(res.data.message);
      toast.success(res.data.message);
      // ✅ Auto navigate after success
      if (res.data.success) {
        setTimeout(() => {
          navigate("/register-complaints-manual"); // 👈 apna route yaha dalna
        }, 1500); // thoda delay taaki success message dikhe
      }

    } catch (error) {
      // Global error handler se error object {status, message} milega
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };






  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 sm:p-6 md:p-10">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-6 sm:p-8 md:p-10 space-y-6">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-700">
          📄 Complaint Application Preview
        </h2>

        {/* Letter Body */}
        <div className="text-base sm:text-lg leading-relaxed text-gray-800 space-y-4">
          <p>
            To,<br />
            {department || "Concerned Authority"},<br />
            Lucknow
          </p>

          <p className="font-semibold">Subject: {title || "Complaint Regarding Civic Issue"}</p>

          <p>
            Respected Sir/Madam,<br />
            I, <strong>{name || "Citizen"}</strong>, would like to bring to your attention the following issue:
          </p>

          <p className="italic">{description || "No description provided."}</p>

          <p>
            Kindly look into this matter at the earliest. You may contact me at{" "}
            <strong>{mobile || "N/A"}</strong>
            {email && ` or via email at ${email}`}.
          </p>

          {location && (
            <p className="text-sm text-gray-600">
              📍 Location: Latitude {location.lat}, Longitude {location.lng}
            </p>
          )}

          <p>
            Sincerely,<br />
            {name || "Citizen"}
          </p>
        </div>
        <button
         onClick={handleSendComplaint}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Complaint"}
        </button>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}

      </div>
    </div>
  );
};

export default ComplaintPreview;