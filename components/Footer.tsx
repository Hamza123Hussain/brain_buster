import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-slate-600 text-[#F5F5F5] shadow-md">
      <div className="text-center flex flex-col sm:flex-row justify-between sm:gap-10 items-center px-2">
        {/* Logo and Title */}
        <div className="flex items-center sm:mb-0">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={20}
            height={40}
            className="rounded-full"
          />
          <h4 className="text-[8px] font-bold ml-2 text-white">Brain Buster</h4>
        </div>
        <p className="text-[8px] lg:ml-24">
          Disclaimer: The AI-generated content might not be 100% accurate.
        </p>
        {/* Footer Text */}
        <p className="text-[8px]  ">
          &copy; {new Date().getFullYear()} Brain Buster. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
