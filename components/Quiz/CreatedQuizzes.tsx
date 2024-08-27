import { fetchAiQuestions } from '@/functions/Quiz/GettingUserQuiz'
import { UserContext } from '@/utils/Context'
import { Quiz } from '@/utils/Quiz'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Loader'
import { FaRegFrown } from 'react-icons/fa'
import DisplayCard from './DisplayCard'
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
        const Data = await fetchAiQuestions(userData.email)
        if (Data) {
          setQUIZ(Data)
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
        <div className="flex flex-col justify-center mx-auto items-center mt-20">
          <FaRegFrown size={100} className="text-4xl text-gray-500 mb-4" />
          <p className="text-center text-lg md:text-4xl text-gray-500">
            No Quizzes created yet.
          </p>
        </div>
      )}
    </>
  )
}
export default CreatedQuizzes
