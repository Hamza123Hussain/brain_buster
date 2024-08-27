import Loader from '@/components/Loader'
import AttemptCard from '@/components/Quiz/AttemptCard'
import { fetchQuizAttempts } from '@/functions/Quiz/GettingUserAttempt'
import { UserContext } from '@/utils/Context'
import { UserAttempt } from '@/utils/UserAttempts'
import React, { useContext, useEffect, useState } from 'react'
import { FaClipboardList, FaRegFrown } from 'react-icons/fa'
const AttemptingQuizDetails = () => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [attemptedQuizzes, setAttemptedQuizzes] = useState<UserAttempt[]>([])
  useEffect(() => {
    const GetUserAttempts = async () => {
      setLoading(true)
      try {
        const data = await fetchQuizAttempts(userData.email)
        if (data) {
          setAttemptedQuizzes(data)
          setLoading(false)
        } else {
          console.warn('No attempted quizzes found for the user')
        }
      } catch (error) {
        console.error('Error fetching attempted quizzes:', error)
        setLoading(false)
      }
    }
    GetUserAttempts()
  }, [])
  if (loading) return <Loader />

  return (
    <>
      {attemptedQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto">
          {attemptedQuizzes.map((attempt) => (
            <AttemptCard attempt={attempt} key={attempt.AttemptID} />
          ))}
        </div>
      ) : (
        // Updated component with a new icon
        <div className="flex flex-col justify-center mx-auto items-center min-h-screen">
          <FaClipboardList size={100} className="text-4xl text-gray-500 mb-4" />
          <p className="text-center text-lg md:text-4xl text-gray-500">
            No Quizzes attempted yet.
          </p>
        </div>
      )}
    </>
  )
}

export default AttemptingQuizDetails
