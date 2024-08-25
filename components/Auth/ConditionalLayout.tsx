'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { UserContext } from '@/utils/Context'
import LandingPage from '../LandingPage'
import { Toaster } from 'react-hot-toast'
import { usePathname } from 'next/navigation'
import Login from '@/app/Login/page'

const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const { userData } = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  // Use useEffect to only set isClient on the client-side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Check if the current route is login or signup
  const isAuthPage =
    pathname === '/Login' ||
    pathname === '/Signup' ||
    pathname === '/Forgotpass'

  // Render the layout based on client-side state
  if (!isClient) {
    return null // or a loading spinner if preferred
  }

  return (
    <>
      {isAuthPage || userData ? (
        <main className="flex-grow flex">
          {children}
          <Toaster />
        </main>
      ) : (
        <div className=" flex flex-col">
          <LandingPage />
        </div>
      )}
    </>
  )
}

export default ConditionalLayout
