import Loader from '@/components/Loader'
import AttemptCard from '@/components/Quiz/AttemptCard'
import { fetchQuizAttempts } from '@/functions/Quiz/GettingUserAttempt'
import { UserContext } from '@/utils/Context'
import { UserAttempt } from '@/utils/UserAttempts'
import React, { useContext, useEffect, useState } from 'react'
import Empty from '../Empty'
import { FaClipboardList } from 'react-icons/fa'

const AttemptingQuizDetails = () => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [attemptedQuizzes, setAttemptedQuizzes] = useState<UserAttempt[]>([])

  useEffect(() => {
    const GetUserAttempts = async () => {
      setLoading(true)
      try {
        const data: UserAttempt[] = await fetchQuizAttempts(userData.email)
        if (data) {
          // Sort the data by CreatedAt in descending order
          const sortedData = data.sort((a, b) => {
            const dateA = new Date(a.CreatedAt)
            const dateB = new Date(b.CreatedAt)
            return dateB.getTime() - dateA.getTime()
          })
          setAttemptedQuizzes(sortedData)
        } else {
          console.warn('No attempted quizzes found for the user')
        }
      } catch (error) {
        console.error('Error fetching attempted quizzes:', error)
      } finally {
        setLoading(false)
      }
    }
    GetUserAttempts()
  }, [userData.email, setLoading])

  if (loading) return <Loader />

  const AvgScore =
    attemptedQuizzes.reduce((acc: number, attempt: UserAttempt) => {
      return acc + attempt.Score
    }, 0) / attemptedQuizzes.length

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <div className="mb-4 text-xl sm:text-2xl font-extrabold text-green-400 flex justify-center items-center">
        Avg Score of {userData.Name}: {AvgScore.toFixed(2)}
      </div>
      {attemptedQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto">
          {attemptedQuizzes.map((attempt) => (
            <AttemptCard attempt={attempt} key={attempt.AttemptID} />
          ))}
        </div>
      ) : (
        <Empty
          text="No Quizzes attempted yet."
          icon={<FaClipboardList size={100} className="text-purple-500 mb-4" />}
        />
      )}
    </div>
  )
}

export default AttemptingQuizDetails
