import { fetchAiQuestions } from '@/functions/Quiz/GettingUserQuiz'
import { UserContext } from '@/utils/Context'
import { Quiz } from '@/utils/Quiz'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Loader'
import DisplayCard from './DisplayCard'
import Empty from '../Empty'
import { FaRegFrown } from 'react-icons/fa'
const CreatedQuizzes = () => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [UserQUIZ, setQUIZ] = useState<Quiz[]>([])
  useEffect(() => {
    const GetUserQUIZ = async () => {
      if (!userData.email) {
        console.error('User email is not defined')
        return
      }
      setLoading(true)
      try {
        const data = await fetchAiQuestions(userData.email)
        if (data) {
          // Sort the data by CreatedAt in descending order
          const sortedData = data.sort((a: any, b: any) => {
            const dateA = new Date(a.CreatedAt)
            const dateB = new Date(b.CreatedAt)
            return dateB.getTime() - dateA.getTime()
          })
          setQUIZ(sortedData)
        } else {
          console.warn('No quizzes found for the user')
        }
      } catch (error) {
        console.error('Error fetching quizzes:', error)
      } finally {
        setLoading(false)
      }
    }
    GetUserQUIZ()
  }, [userData.email, setLoading])

  if (loading) {
    return <Loader />
  }
  return (
    <>
      {UserQUIZ.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto">
          {UserQUIZ.map((element) => (
            <DisplayCard key={element.ID} element={element} />
          ))}
        </div>
      ) : (
        <Empty
          text="No Quizzes created yet."
          icon={
            <FaRegFrown size={100} className="text-4xl text-gray-500 mb-4" />
          }
        />
      )}
    </>
  )
}
export default CreatedQuizzes
