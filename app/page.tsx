'use client'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { Quiz } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import { FaRegFrown, FaRegSadTear } from 'react-icons/fa'
import { fetchAllAiQuiz } from '@/functions/Quiz/GettingALLQuiz'
import DisplayCard from '@/components/Quiz/DisplayCard'
import Image from 'next/image'
export default function Home() {
  const { userData, loading, setLoading } = useContext(UserContext)
  const [QuizData, SetQuizData] = useState<Quiz[]>([])
  useEffect(() => {
    const GetQuizzes = async () => {
      setLoading(true)
      try {
        const Data = await fetchAllAiQuiz(userData.email)
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
      <div className="flex flex-col justify-center mx-auto  items-center mt-20  ">
        <FaRegFrown size={100} className="text-4xl text-gray-500 mb-4" />
        <p className="text-center text-lg md:text-4xl text-gray-500">
          No Quizzes created yet.
        </p>
      </div>
    )
  }
  if (loading) return <Loader />
  //add title and icon here
  return (
    <div className="flex flex-col items-start my-2 justify-start  p-2  rounded-xl">
      <h3 className=" text-black capitalize  text-2xl px-1 sm:text-4xl font-extrabold ">
        All Quizzes
      </h3>

      {QuizData.map((Quiz) => (
        <DisplayCard key={Quiz.ID} element={Quiz} />
      ))}
    </div>
  )
}
