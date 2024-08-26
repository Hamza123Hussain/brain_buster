import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-500  border-t border-slate-200 shadow-md px-4">
      <div className="text-center flex flex-col sm:flex-row justify-between  items-center">
        {/* Logo and Title */}
        <div className="flex items-center sm:mb-0">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={30}
            height={40}
            className="rounded-full"
          />
          <h4 className="text-xs font-bold ml-2">Brain Buster</h4>
        </div>
        <p className="text-xs ">
          Disclaimer: The AI-generated content might not be 100% accurate.
        </p>
        {/* Footer Text */}
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Brain Buster. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
