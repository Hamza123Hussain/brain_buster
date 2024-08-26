'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { InputValues, UserData } from './SignupInterface'
import { useRouter } from 'next/navigation'
export const UserContext = createContext<any>(null)
const ContextProvider = ({ children }: { children: ReactNode }) => {
  //States
  const [inputVal, setInputVal] = useState<InputValues>({
    email: '',
    password: '',
    Name: '',
    Image: null,
  })
  const Router = useRouter()
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

  //saving on local storage
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

  //functions
  const handleNextQuestion = (
    NumberOfQuestions: number,
    OPTION: string,
    CorrectAnswer: string,
    Questions: any[]
  ) => {
    if (OPTION === CorrectAnswer) {
      setscore((prev: number) => prev + 1)
    }

    if (currentQuestionIndex < NumberOfQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Convert the Questions array to a JSON string
      const questionsString = encodeURIComponent(JSON.stringify(Questions))
      // Result: '%5B%22What%20is%20React%3F%22%2C%22What%20is%20useEffect%3F%22%2C%22Explain%20useState%20hook.%22%5D'

      // Pass the serialized array as a query parameter in the URL
      Router.push(`/Report?questions=${questionsString}`)
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
