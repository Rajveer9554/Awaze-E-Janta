

// export default GetStarted


// import React, { useState,useEffect } from "react";

// function Signup() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     age: "",
//     gender: "",
//   });
// useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // yahan backend API call kar sakte ho (fetch/axios se)
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center  p-4">
//       <div className="mt-15 bg-white/80 backdrop-blur-md gradient-shadow  shadow-xl rounded-xl p-8 w-full max-w-md border border-gray-100 animate-fadeIn">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Create Your Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter User Name"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Age
//             </label>
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               placeholder="Enter Age"
//               required
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200"
//             />
//           </div>

//           <div className="flex items-center space-x-6">
//             <span className="text-sm font-semibold text-gray-700">Gender</span>
//             <label className="flex items-center space-x-1 text-gray-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={formData.gender === "male"}
//                 onChange={handleChange}
//                 className="accent-indigo-500"
//               />
//               <span>Male</span>
//             </label>
//             <label className="flex items-center space-x-1 text-gray-700">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={formData.gender === "female"}
//                 onChange={handleChange}
//                 className="accent-indigo-500"
//               />
//               <span>Female</span>
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 text-sm mt-4">
//           Already have an account?{" "}
//           <a href="#" className="text-indigo-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState, useEffect } from "react";
import { registerUser } from "../services/UserService";
import { Link } from "react-router-dom";

function GetStarted() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // yahan backend API call kar sakte ho (fetch/axios se)
     try {
      const data = await registerUser(formData);
      alert("✅ User registered successfully!");
      console.log(data);
    } catch (error) {
      alert("❌ Error: " + error.msg);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="mt-10 bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg border border-gray-100 animate-fadeIn">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter User Name"
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 text-sm sm:text-base"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age"
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 text-sm sm:text-base"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-sm font-semibold text-gray-700">Gender</span>
            <label className="flex items-center space-x-1 text-gray-700">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="accent-indigo-500"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-1 text-gray-700">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="accent-indigo-500"
              />
              <span>Female</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 text-xs sm:text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
  Login
</Link>

        </p>
      </div>
    </div>
  );
}

export default GetStarted;