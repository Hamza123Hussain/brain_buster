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
    // This ensures that `isClient` is only true on the client side
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="bg-blue-200 px-2 flex justify-between items-center">
      <Link href={'/'}>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={'/Logo.png'}
            alt="Logo"
            width={50}
            height={40}
            className="rounded-full"
          />
          <h3 className="text-xs sm:text-base text-white">Thought Flow</h3>
        </div>
      </Link>
      {userData ? (
        <ShowingUser User={userData} />
      ) : (
        <></>
        // <button
        //   onClick={() => Router.push('/Login')}
        //   className="bg-green-300 px-7 border-white hover:bg-white hover:text-black text-white rounded-lg"
        // >
        //   Login
        // </button>
      )}
    </div>
  )
}

export default Navbar
