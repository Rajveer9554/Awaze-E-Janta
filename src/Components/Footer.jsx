import React from 'react'

function Footer() {
  return (
    <footer className='flex  bg-blue-900 text-white text-left px-30 py-4  '>
      <p className='text-sm'> &copy; {new Date().getFullYear()} Awaze-E-Janata.
         All rights reserved. 
      </p>
      <p className='text-xs  mx-auto'>
        Made with ❤️ by RAJVEER PRATAP SINGH 
      </p>
    </footer>
  )
}

export default Footer
