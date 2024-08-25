import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-500 py-1 border-t border-black  shadow-md px-2">
      <div className="text-center flex  flex-col sm:flex-row  justify-between items-center ">
        {' '}
        <div className="flex  items-center">
          <Image
            src={'/Logo.png'}
            alt="Logo"
            width={50}
            height={40}
            className=" rounded-full"
          />
          <h4 className="text-xl font-bold mb-2">Thought Flow</h4>
        </div>
        <p className=" text-sm sm:text-lg">
          &copy; {new Date().getFullYear()} Thought Flow. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
