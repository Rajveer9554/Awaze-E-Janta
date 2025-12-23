
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService.js';
import { ToastContainer, toast } from 'react-toastify';

function Login () {
  const navigate = useNavigate();
   const [ formData,setFormData]= useState({
    email:"",
    password:"",
   });

   // error handling state
   const [errors,setErrors]= useState({});  

   useEffect(() => {
    window.scrollTo(0,0);
   },[]);

   const handleChange = (e) => {
    const {name,value } =e.target;
    setFormData((prev)=>({...prev, [name]:value}));
   

    // jis field me type kar rahe ho uska error turant hata do
    setErrors((prev)=> ({...prev, [name]:""}));
   };

  // ------------ Frontend Validation ------------

  const validate =()=>{
     const newErrors ={};

     // email validation 
     if(!formData.email || !formData.email.trim()){
      newErrors.email="Email is required";
     }
     else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())){
      newErrors.email = "Please enter a valid email address";
     }
      // password validation
      if(!formData.password.trim()){
        newErrors.password="Password is required";
      }
      else if (formData.password.trim().length <6){
        newErrors.password="Password must be at least 6 characters long";

      }
      return newErrors;
  };
  







//    const handleSubmit = async(e)=>{
//     e.preventDefault();
//     const validationErrors = validate();

// //     "Agar validationErrors ke andar kuch bhi error present hai,
// // toh form submit aage mat badhne do – pehle errors dikha do.

//     if (Object.keys (validationErrors).length >0){
//       setErrors (validationErrors);
//       return;
//     }
//      try {
//       //  Email & password backend ko bhejta hai Backend se response aane tak rukta haiResponse data me store hota hai
//       const data = await loginUser(formData);
//             // Handle login logic here
//             alert("Login Successful!");
//             console.log("Login data submitted:", data);

//             navigate("/register-complaints"); // Redirect to complaint page after successful login
    
//    }
     
//       catch (error){
//         console.error("Login failed:",error);
//         alert ("Login failed. Please try again.");
//       }

//     };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    toast.error('Please fill the field.');
    return;
  }

  try {
    const data = await loginUser(formData);

    // ✅ Save token before navigating
    localStorage.setItem("token", data.token);

    // alert("Login Successful!");
    toast.success('Login Successful!');
    console.log("Login data submitted:", data);

    // ✅ Redirect to complaints page
    setTimeout(() => {
    navigate(data.redirect || "/register-complaints");
  } ,1000);
}
  catch (error) {
    console.error("Login failed:", error);
    // alert("Login failed. Please try again.");
    toast.error('Login failed. Please try again.');
  }
};

    



  return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="mt-10 bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg border border-gray-100 animate-fadeIn">
        <h1 className='text-xl sm:text-xl md:text-2xl text-center mb-6 font-semibold'> Welcome back to Awaze-E-Janta </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
              
              className={`w-full px-3 sm:px-4 py-2 rounded-lg border focus:ring-2  focus:outline-none transition duration-200 text-sm sm:text-base ${
                errors.email ?"border-red-500 focus:ring-red-400 " : "border-gray-300 focus:ring-indigo-500" 
              }`}
              
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
             <label className='block text-sm font-semibold text-gray-700 mb-1 mt-4'>
              Password
             </label>
             <input
             name="password"
             type="password"
             value={formData.password}
             onChange={handleChange}

             placeholder='Enter Password'
             
             className={`w-full px-3 sm:px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition duration-200 text-sm sm:text-base ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-indigo-500"
              }`}
             />
               {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md text-sm sm:text-base"
          >
            Login
          </button>
       

        </form>
         <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          />
    </div>
    </div>
  )
}

export default Login 



