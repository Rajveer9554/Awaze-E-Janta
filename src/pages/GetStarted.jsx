import { Hand } from 'lucide-react'
import React, { useState } from 'react'

function GetStarted() {
const [formData, setFormData] =useState({

  username:"",
  email:"",
  password:"",
  age:"",
  gender:"",
});

const [errors, setErrors]=useState([]);

// handle change in input//

const handleChange =(e)=>{
  const {name,value}=e.target;
  setFormData((prev)=>({
    ...prev,
    [name]:value,
  }));
};

//form submitted//

const handleSubmit =async (e)=>{
  e.preventDefault();

  setErrors([]);

  console.log("Form Submitted:", formData);
  // yopu can replace this with an API call

}




  return (
    <div className="max-w-md mx-auto  bg-white mt-25 p-8 rounded-lg shadow-lg shadow-blue-900">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Create Your Account
      </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
            onChange={handleChange}
            type='text'
            name='username'
            value={formData.username}
            placeholder='Enter User Name'
            className='bg-gary-300 rounded-lg border w-full focus:outline-none focus:ring-2 px-4 py-2 focus:ring-indigo-300'
            />
          </div>

          {/* email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
             onChange={handleChange}
            type='text'
            name='email'
            value={formData.email}
            placeholder='Enter email'
            className='bg-gary-300 rounded-lg border w-full focus:outline-none focus:ring-2 px-4 py-2 focus:ring-indigo-300'
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
             onChange={handleChange} 
            type='password'
            name='password'
            value={formData.password}
            placeholder='Enter password'
            className='bg-gary-300 rounded-lg border w-full focus:outline-none focus:ring-2 px-4 py-2 focus:ring-indigo-300'
            />
          </div>

           {/* age*/}
          <div>
            <label className="block text-gray-700 mb-1">Age</label>
            <input
             onChange={handleChange}
            type='number'
            name='age'
            value={formData.age}
            placeholder='Enter Age'
            className='bg-gary-300 rounded-lg border w-full focus:outline-none focus:ring-2 px-4 py-2 focus:ring-indigo-300'
            />
          </div>

          {/* gender */}

          <div>
            <label className='block text-gray-700 mb-1'>Gender</label>
            <div className='flex space-x-4'>
              <label className='inline-flex items-center'>
                <input 
                 onChange={handleChange}
                type='radio'
                name="gender"
                value="male"
                checked={formData.gender==="male"}
                className='text-indigo-600'
               
                
                />
                <span className='ml-2 text-grey-700'>Male</span>
              </label>
              <label className='inline-flex items-center'>
                <input 
                 onChange={handleChange}
                type='radio'
                name="gender"
                value="female"
                checked={formData.gender==="female"}
                className='text-indigo-600'
                />
                <span className='ml-2 text-grey-700'>Female</span>
              </label>

            </div>
          </div>

          {/* submit */}
          <div>
            <button 
            type='submit'
            className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-800 transiton duration-300'
            >
              Sign UP

            </button>
          </div>

        </form>
      
    </div>
  )
}

export default GetStarted
