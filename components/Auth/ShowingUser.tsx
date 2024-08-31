import { UserDetails } from '@/utils/UserInterface'
import React, { useState } from 'react'
import UserDropDown from './UserDropDown'
import Image from 'next/image'

const ShowingUser = ({ User }: { User: UserDetails }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="px-2 relative text-[#F5F5F5]">
      <div
        className="flex items-center cursor-pointer gap-2"
        onMouseEnter={() => setDropdownOpen(true)}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <Image
          src={User.imageUrl}
          alt="IMAGE"
          className="rounded-xl"
          width={30}
          height={40}
        />
        <h6 className="text-xs sm:text-base md:text-lg capitalize">
          {User.Name}
        </h6>
      </div>
      {dropdownOpen && <UserDropDown setDropdownOpen={setDropdownOpen} />}
    </div>
  )
}

export default ShowingUser
