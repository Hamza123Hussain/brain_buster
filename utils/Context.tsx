'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { InputValues, UserData } from './SignupInterface'
export const UserContext = createContext<any>(null)
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [inputVal, setInputVal] = useState<InputValues>({
    email: '',
    password: '',
    Name: '',
    Image: null,
  })
  const [loading, setLoading] = useState(true) // Start with loading true
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    try {
      const storedData = localStorage.getItem('CurrentIndex')
      return storedData ? JSON.parse(storedData) : 0 // Initialize with empty object
    } catch (error) {
      console.error('Failed to parse CurrentIndex from localStorage:', error)
      return 0 // Fallback to empty object
    }
  })
  const [userData, setUserData] = useState<UserData>(() => {
    try {
      const storedData = localStorage.getItem('userData')
      return storedData ? JSON.parse(storedData) : {} // Initialize with empty object
    } catch (error) {
      console.error('Failed to parse userData from localStorage:', error)
      return {} // Fallback to empty object
    }
  })
  const [score, setscore] = useState(() => {
    try {
      const storedData = localStorage.getItem('Currentscore')
      return storedData ? JSON.parse(storedData) : 0 // Initialize with empty object
    } catch (error) {
      console.error('Failed to parse CurrentIndex from localStorage:', error)
      return 0 // Fallback to empty object
    }
  })
  useEffect(() => {
    // Save userData to local storage whenever it changes
    try {
      localStorage.setItem('CurrentIndex', JSON.stringify(currentQuestionIndex))
    } catch (error) {
      console.error(
        'Failed to save currentQuestionIndex to localStorage:',
        error
      )
    }
  }, [currentQuestionIndex])
  useEffect(() => {
    // Save userData to local storage whenever it changes
    try {
      localStorage.setItem('Currentscore', JSON.stringify(score))
    } catch (error) {
      console.error(
        'Failed to save currentQuestionIndex to localStorage:',
        error
      )
    }
  }, [score])
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
  const handleNextQuestion = (NumberOfQuestions: number) => {
    if (currentQuestionIndex < NumberOfQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      alert('You have completed the quiz!')
    }
  }
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loading,
        setLoading,
        inputVal,
        setInputVal,
        setCurrentQuestionIndex,
        currentQuestionIndex,
        handleNextQuestion,
        setscore,
        score,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default ContextProvider
