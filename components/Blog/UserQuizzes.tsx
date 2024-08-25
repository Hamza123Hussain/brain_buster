import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/utils/Context'
import Loader from '../Loader'
import { useRouter } from 'next/navigation'
import { fetchAiQuestions } from '@/functions/Quiz/GettingUserQuiz'
import { Quiz } from '@/utils/BlogInterface'
import DisplayCard from '../Quiz/DisplayCard'
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
    <div className="flex flex-col p-2 px-4 justify-center items-center ">
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
          <DisplayCard key={element.ID} element={element} />
        ))}
      </div>
    </div>
  )
}
export default UserQuizzes
