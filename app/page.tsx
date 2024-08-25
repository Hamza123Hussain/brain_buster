'use client'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { Quiz } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import { FaRegSadTear } from 'react-icons/fa'
import { fetchAllAiQuiz } from '@/functions/Quiz/GettingALLQuiz'
export default function Home() {
  const { userData, loading, setLoading } = useContext(UserContext)
  const [QuizData, SetQuizData] = useState<Quiz[]>([])
  useEffect(() => {
    const GetQuizzes = async () => {
      setLoading(true)
      try {
        const Data = await fetchAllAiQuiz(userData.UserID)
        if (Data) {
          console.log('API RESPONDED : ', Data)
          SetQuizData(Data)
          setLoading(false)
        }
      } catch (error) {
        console.log('FUNCTION ERROR : ', error)
        setLoading(false)
      }
    }
    GetQuizzes()
  }, [])
  if (QuizData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <FaRegSadTear className="text-6xl text-gray-400" />
        <p className="text-lg text-gray-600">No Quizez Created available.</p>
      </div>
    )
  }
  if (loading) return <Loader />
  //add title and icon here
  return (
    <div className="flex flex-col items-center mx-auto my-5 justify-center min-h-screen p-2  rounded-xl">
      {QuizData.map((Quiz) => (
        <div key={Quiz.ID}>{Quiz.Topic}</div>
      ))}
    </div>
  )
}
