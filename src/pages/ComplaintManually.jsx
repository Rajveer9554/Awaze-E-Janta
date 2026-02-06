



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

function ComplaintManually() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [formData, setFormData] = useState({
    
    name: "",
    mobile: "",
    email: "",
    title: "",
    description: "",
    department: "",
    address: "",
    file: null,
    location: null
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData, file: e.target.files[0]
    }));
  };

  // const captureLocation = () => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       location: {
  //         lat: pos.coords.latitude,
  //         lng: pos.coords.longitude
  //       }
  //     }));
  //   });
  // };

  const captureLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        // Lucknow check (frontend feedback)
        const lucknowLat = 26.8467, lucknowLng = 80.9462, radiusKm = 25;
        const toRad = (val) => (val * Math.PI) / 180;
        const R = 6371;
        const dLat = toRad(lat - lucknowLat);
        const dLng = toRad(lng - lucknowLng);
        const a = Math.sin(dLat/2)**2 +
          Math.cos(toRad(lucknowLat)) * Math.cos(toRad(lat)) *
          Math.sin(dLng/2)**2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c;

        if (distance <= radiusKm) {
          setFormData((prev) => ({ ...prev, location: { lat, lng } }));
          alert("✅ Location verified: You are in Lucknow");
        } else {
          alert("❌ Currently service not available here");
        }
      },
      () => alert("❌ Location access denied")
    );
  };


  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.match(/^[0-9]{10}$/)) newErrors.mobile = "Valid 10-digit mobile number is required";
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required";
    if (!formData.title.trim()) newErrors.title = "Complaint Title is required";
    if (!formData.description.trim() || formData.description.length < 10) newErrors.description = "Description must be at least 10 characters";
    // ✅ Location required check
  if (!formData.location) {
    newErrors.location = "Location is required. Please capture your GPS location.";
  }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = JSON.parse(localStorage.getItem("user"));
    const complaintData = { ...formData, userId: user._id };
    toast.success("Complaint Application Generated! Please proceed to Preview Page.");

      alert("Complaint Application Generated! Please proceed to Preview Page.");
      navigate('/complaint-preview', { state: complaintData });
    }
  };

  return (
    <div className="flex min-h-screen p-4 sm:p-6 md:p-10 mt-10 justify-center items-center 
                    bg-linear-to-r from-blue-100 via-purple-100 to-pink-100 rounded-br-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 sm:p-6 md:p-8 w-full max-w-lg sm:max-w-2xl md:max-w-3xl 
                   space-y-6 shadow-2xl rounded-lg"
      >
        <h2 className="text-center text-xl sm:text-2xl font-bold text-blue-700">
          📝 Complaint Manually Page
        </h2>
        <p className="text-center text-base sm:text-lg font-medium text-gray-600">
          Fill out the form below to generate the complaint application.
        </p>

        {/* Full name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Mobile Number */}
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          placeholder="Mobile number"
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        />
        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Complaint Title */}
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title of Complaint"
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        {/* Description */}
        <textarea
          name="description"
          placeholder="Describe your issue..."
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

        {/* Department */}
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        >
          <option value="">Select Department (optional)</option>
          <option value="Nagar Nigam">Nagar Nigam</option>
          
          <option value="sdm">Sub District Magistrate</option>
          <option value="dm">District Magistrate</option>
          
          <option value="Rto">Regional Transport Office</option>
          <option value="Electricity Board">Electricity Board</option>
        </select>

        {/* Manual Address */}
        <input
          type="text"
          name="address"
          value={formData.address}
          placeholder="Manual Address (optional)"
          onChange={handleChange}
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        />

        {/* File Upload */}
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border rounded-lg p-3 text-sm sm:text-base"
        />

        {/* GPS Location */}
        <div className="flex flex-col items-start space-y-2">
          <button
            
            type="button"
            onClick={captureLocation}
            className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            📍 Capture Location
          </button>
          {formData.location && (
            <p className="text-sm text-gray-600">
              Latitude: {formData.location.lat}, Longitude: {formData.location.lng}
            </p>
          )}
          {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg 
                     hover:bg-blue-800 transition font-bold text-base sm:text-lg mt-6"
        >
          🚀 Generate Application
        </button>
      </form>
    </div>
  );
}

export default ComplaintManually;
    