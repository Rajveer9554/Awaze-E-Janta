import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-between bg-blue-900 text-white px-4 sm:px-8 md:px-16 py-4 '>
      <p className='text-sm text-center sm:text-left '> &copy; {new Date().getFullYear()} Awaze-E-Janata.
         All rights reserved. 
      </p>
      <p className='text-xs  sm:text-sm mt-2 sm:mt-0 text-center sm:text-right'>
        Made with ❤️ by RAJVEER PRATAP SINGH 
      </p>
    </footer>
  )
}

export default Footer
