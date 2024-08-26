import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/utils/Context'
import Loader from '../Loader'
import { useRouter } from 'next/navigation'
import { fetchAiQuestions } from '@/functions/Quiz/GettingUserQuiz'
import { Quiz } from '@/utils/BlogInterface'
import DisplayCard from './DisplayCard'
import { FaRegFrown } from 'react-icons/fa'
const UserQuizzes = () => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [UserQUIZ, setQUIZ] = useState<Quiz[]>([])
  const Router = useRouter()
  useEffect(() => {
    const GetUserQUIZ = async () => {
      if (!userData.email) {
        console.error('User email is not defined')
        return
      }
      setLoading(true)
      try {
        const Data = await fetchAiQuestions(userData.email)
        // console.log(Data)
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
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex flex-col  px-4 min-h-screen mx-auto  items-center ">
      <div className="flex flex-col sm:flex-row gap-2 my-5">
        <button
          onClick={() => Router.push('/Quiz/AI')}
          className="bg-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          Make A Quiz With AI
        </button>
      </div>
      {UserQUIZ.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {UserQUIZ.map((element) => (
            <DisplayCard key={element.ID} element={element} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center mx-auto  items-center mt-20">
          <FaRegFrown size={100} className="text-4xl text-gray-500 mb-4" />
          <p className="text-center text-lg md:text-4xl text-gray-500">
            No Quizzes created yet.
          </p>
        </div>
      )}
    </div>
  )
}

export default UserQuizzes
