import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-[#6D6D6D] border-t border-[#E0E0E0] shadow-md ">
      <div className="text-center flex flex-col sm:flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center sm:mb-0">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={30}
            height={40}
            className="rounded-full"
          />
          <h4 className="text-xs sm:text-sm font-bold ml-2 text-[#1C1C1C]">
            Brain Buster
          </h4>
        </div>
        <p className="text-xs sm:text-sm">
          Disclaimer: The AI-generated content might not be 100% accurate.
        </p>
        {/* Footer Text */}
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Brain Buster. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
