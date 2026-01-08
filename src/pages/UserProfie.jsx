import React from 'react';
import { useState,useEffect } from 'react';
import API from '../api/axios';
import defaultAvatar from '../assets/defaultAvatar.png';
import { getUserProfile } from '../services/UserService';
import { updateUserProfile } from '../services/UserService';
import { FaUser } from 'react-icons/fa';

function UserProfie() {
const [profile, setProfile] = useState({
    username: "",
    email: "",
    mobile: "",
    address: "",
    image: "",
    age:"",
    gender:""
  });
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  

  // ✅ Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await getUserProfile();
        setProfile(data);
        setPreview(data.image || "");
      } catch (err) {
        setMessage(err.message || "Error loading profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
// ✅ Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // ✅ Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, image: reader.result }); // base64 encode
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Save changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      setLoading(true);
      console.log("Payload being sent:", profile); // ✅ Debugging

      // await updateUserProfile( profile);
      await updateUserProfile({ ...profile, age: Number(profile.age) });

      setMessage("✅ Profile updated successfully");
    } catch (err) {
      setMessage(err.message || "❌ Error updating profile");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='min-h-screen  p-4 sm:p-6 md:p-10 justify-center items-center  '>
      <div className='mx-auto mt-10  bg-white shadow-lg rounded-lg w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 sm:p-8 md:p-10 space-y-6 border-2 border-blue-500'>
        {/* <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-700'>
            WelCome back to your own Profile</h1>
        <p className='text-center  text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Manage your account details and update your information
</p> */}
{/* Profiule image */}
<div className='flex flex-col items-center  bg-gradient-to-r from-blue-300 to-purple-400 p-4 rounded-lg'>
    <img 
    src={preview || defaultAvatar}
    alt="Profile"
    className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-green-600'
    />
    <label className="cursor-pointer text-xs sm:text-sm text-blue-600 hover:underline">
            Change Image
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        <h2 className="mt-4 sm:mt-6 md:mt-8 text-2xl font-bold">{profile.username || "Your Name"}</h2>
  <p className="text-sm opacity-80">{profile.email || "your@email.com"}</p>
  

    
</div>
<h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-700'>
            WelCome back to your own Profile</h1>
        <p className='text-center  text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Manage your account details and update your information
</p>
{/* Form */}
<form onSubmit={handleSubmit} className="space-y-4">
        <div className='relative '>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border  rounded-md px-3 py-2 focus:ring focus:ring-blue-300 text-sm sm:text-base"
          />
        <span className="absolute  top-2.5 text-gray-400">
  
</span>

          </div>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300 text-sm sm:text-base"
          />
          <input
            type="text"
            name="mobile"
            value={profile.mobile}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300 text-sm sm:text-base"
          />
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300 text-sm sm:text-base"
          />
          <input
  type="number"
  name="age"
  value={profile.age}
  onChange={handleChange}
  placeholder="Age"
  className="w-full border rounded-md px-3 py-2"
/>

<select
  name="gender"
  value={profile.gender}
  onChange={handleChange}
  className="w-full border rounded-md px-3 py-2"
>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>

        <button
            type="submit"
            disabled={loading}
            className="w-full  mt-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-102 transition disabled:opacity-60 text-sm sm:text-base"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>

        {message && (
          <p className="text-center text-xs sm:text-sm text-gray-700 mt-4">{message}</p>
        )}

      </div>
    </div>
  )
}

export default UserProfie
