'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { InputValues, UserData } from './SignupInterface'
import { useRouter } from 'next/navigation'
import { Questions, Quiz } from './Quiz'
import { submitUserAttempt } from '@/functions/Quiz/AddingUserAttempts'
export const UserContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  // States
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
      return storedData ? JSON.parse(storedData) : 0 // Initialize with 0
    } catch (error) {
      console.error('Failed to parse CurrentIndex from localStorage:', error)
      return 0 // Fallback to 0
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
      return storedData ? JSON.parse(storedData) : 0 // Initialize with 0
    } catch (error) {
      console.error('Failed to parse Currentscore from localStorage:', error)
      return 0 // Fallback to 0
    }
  })

  const [total, settotal] = useState(() => {
    try {
      const storedData = localStorage.getItem('total')
      return storedData ? JSON.parse(storedData) : 0 // Initialize with 0
    } catch (error) {
      console.error('Failed to parse total from localStorage:', error)
      return 0 // Fallback to 0
    }
  })

  const [QUIZDATA, setData] = useState<Quiz | undefined>(() => {
    try {
      const storedData = localStorage.getItem('QuizData')
      return storedData ? JSON.parse(storedData) : undefined // Initialize with undefined
    } catch (error) {
      console.error('Failed to parse QuizData from localStorage:', error)
      return undefined // Fallback to undefined
    }
  })

  // Effect for saving currentQuestionIndex to local storage
  useEffect(() => {
    try {
      localStorage.setItem('CurrentIndex', JSON.stringify(currentQuestionIndex))
    } catch (error) {
      console.error(
        'Failed to save currentQuestionIndex to localStorage:',
        error
      )
    }
  }, [currentQuestionIndex])

  // Effect for saving score to local storage
  useEffect(() => {
    try {
      localStorage.setItem('Currentscore', JSON.stringify(score))
    } catch (error) {
      console.error('Failed to save score to localStorage:', error)
    }
  }, [score])

  // Effect for saving userData to local storage
  useEffect(() => {
    try {
      localStorage.setItem('userData', JSON.stringify(userData))
    } catch (error) {
      console.error('Failed to save userData to localStorage:', error)
    }
  }, [userData])

  // Effect for loading state and timer for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000) // Simulated delay
    return () => clearTimeout(timer) // Cleanup on unmount
  }, [])

  // Effect for saving total to local storage
  useEffect(() => {
    try {
      localStorage.setItem('total', JSON.stringify(total))
    } catch (error) {
      console.error('Failed to save total to localStorage:', error)
    }
  }, [total])

  // Effect for saving QUIZDATA to local storage
  useEffect(() => {
    try {
      if (QUIZDATA) {
        localStorage.setItem('QuizData', JSON.stringify(QUIZDATA))
      }
    } catch (error) {
      console.error('Failed to save QUIZDATA to localStorage:', error)
    }
  }, [QUIZDATA])

  // Function to handle next question logic
  const handleNextQuestion = async (
    NumberOfQuestions: number,
    OPTION: string,
    CorrectAnswer: string,
    Questions: Questions[],
    ID: string,
    score: number
  ) => {
    if (OPTION === CorrectAnswer) {
      setscore((prev: number) => prev + 1)
    }
    if (currentQuestionIndex < NumberOfQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      const questionsString = encodeURIComponent(JSON.stringify(Questions))
      const SubmitData = await submitUserAttempt(userData.email, ID, score)
      if (SubmitData) Router.push(`/Report?questions=${questionsString}`)
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
        settotal,
        total,
        QUIZDATA,
        setData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
