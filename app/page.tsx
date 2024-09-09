'use client'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { Quiz } from '@/utils/Quiz'
import { UserContext } from '@/utils/Context'
import { fetchAllAiQuiz } from '@/functions/Quiz/GettingALLQuiz'
import DisplayCard from '@/components/Quiz/DisplayCard'
import Image from 'next/image'
import { FaRegFrown, FaRegSadTear } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { userData, loading, setLoading, setscore } = useContext(UserContext)
  const [QuizData, SetQuizData] = useState<Quiz[]>([])
  const Router = useRouter()
  useEffect(() => {
    const GetQuizzes = async () => {
      setLoading(true)
      try {
        const Data = await fetchAllAiQuiz()
        if (Data) {
          SetQuizData(Data)
          setLoading(false)
          setscore(0)
        }
      } catch (error) {
        console.log('FUNCTION ERROR : ', error)
        setLoading(false)
      }
    }
    GetQuizzes()
  }, [userData.email, setLoading, setscore])

  if (loading) return <Loader />

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-4">
      <div className=" flex justify-center items-center flex-col my-2">
        {' '}
        <span>Login To Have A Smooth Experience</span>
        <button
          onClick={() => Router.push('/Login')}
          className="bg-[#4CAF50] px-7 border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1C1C1C] text-[#FFFFFF] rounded-lg"
        >
          Login
        </button>
      </div>
      <div className="flex flex-col items-start my-4 justify-start p-4 rounded-xl bg-gray-800 text-white">
        <h3 className="capitalize text-2xl sm:text-4xl font-extrabold text-green-400">
          All Quizzes
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center items-center mx-auto">
        {QuizData.map((Quiz) => (
          <DisplayCard key={Quiz.ID} element={Quiz} />
        ))}
      </div>
    </div>
  )
}
