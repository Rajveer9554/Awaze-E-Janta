import React from 'react'

function Footer() {
  return (
    <footer className='bg-blue-900 text-white text-center py-4 mt-10'>
      <p className='text-sm'> &copy; {new Date().getFullYear()} Awaze-E-Janata.
         All rights reserved. 
      </p>
      <p className='text-xs mt-2'>
        Made with ❤️ by RAJVEER PRATAP SINGH & Raj
      </p>
    </footer>
  )
}

export default Footer
