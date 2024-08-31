'use client'
import { UserContext } from '@/utils/Context'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useState, useEffect } from 'react'
import ShowingUser from './Auth/ShowingUser'
import Link from 'next/link'

const Navbar = () => {
  const Router = useRouter()
  const { userData } = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="bg-gray-900 border-b-2 border-slate-600 px-4 py-2 flex justify-between items-center">
      <Link href={'/'}>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={'/Logo.png'}
            alt="Logo"
            width={50}
            height={40}
            className="rounded-full"
          />
          <h3 className="text-xs sm:text-lg md:text-xl text-[#F5F5F5]">
            Brain Buster
          </h3>
        </div>
      </Link>
      {userData ? (
        <ShowingUser User={userData} />
      ) : (
        <></>
        // <button
        //   onClick={() => Router.push('/Login')}
        //   className="bg-[#4CAF50] px-7 border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1C1C1C] text-[#FFFFFF] rounded-lg"
        // >
        //   Login
        // </button>
      )}
    </div>
  )
}

export default Navbar
