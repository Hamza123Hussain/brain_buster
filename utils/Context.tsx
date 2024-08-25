'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { InputValues } from './SignupInterface'

export const UserContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [inputVal, setInputVal] = useState<InputValues>({
    email: '',
    password: '',
    Name: '',
    Image: null,
  })
  const [loading, setLoading] = useState(true) // Start with loading true
  const [userData, setUserData] = useState<any>(() => {
    try {
      const storedData = localStorage.getItem('userData')
      return storedData ? JSON.parse(storedData) : {} // Initialize with empty object
    } catch (error) {
      console.error('Failed to parse userData from localStorage:', error)
      return {} // Fallback to empty object
    }
  })

  useEffect(() => {
    // Save userData to local storage whenever it changes
    try {
      localStorage.setItem('userData', JSON.stringify(userData))
    } catch (error) {
      console.error('Failed to save userData to localStorage:', error)
    }
  }, [userData])

  useEffect(() => {
    // Simulate loading state for demo purposes
    const timer = setTimeout(() => setLoading(false), 1000) // Simulated delay
    return () => clearTimeout(timer) // Cleanup on unmount
  }, [])

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loading,
        setLoading,
        inputVal,
        setInputVal,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
