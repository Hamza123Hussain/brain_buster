import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/utils/Context'
import Loader from '../Loader'
import { useRouter } from 'next/navigation'
import { fetchAiQuestions } from '@/functions/Quiz/GettingUserQuiz'
import { Quiz } from '@/utils/BlogInterface'
const UserQuizzes = () => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [UserQUIZ, setQUIZ] = useState<Quiz[]>([])
  const Router = useRouter()
  console.log(userData.Name)
  useEffect(() => {
    const GetUserQUIZ = async () => {
      setLoading(true)
      const Data = await fetchAiQuestions(userData.email)
      console.log(Data)
      if (Data) {
        setQUIZ(Data)
        setLoading(false)
      }
    }
    GetUserQUIZ()
  }, [])

  if (loading) {
    return <Loader />
  }
  return (
    <div className="flex flex-col p-4 mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 my-5">
        <button
          onClick={() => Router.push('/Quiz/AI')}
          className="bg-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          Make A Quiz With AI
        </button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2  gap-2">
        {UserQUIZ.map((element) => (
          <div
            onClick={() => Router.push(`/Quiz/${element.ID}`)}
            className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[45vw]  cursor-pointer hover:bg-[#c2f1f1] transition-transform transform hover:scale-90"
            key={element.ID}
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              {element.Topic}
            </h3>
            <p className="text-gray-600 mb-1">
              <strong>Difficulty:</strong> {element.Difficulty}
            </p>
            <p className="text-gray-600">
              <strong>Questions:</strong> {element.NumberOfQuestions}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default UserQuizzes
