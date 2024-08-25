'use client'
import React, { useContext } from 'react'
import Loader from '@/components/Loader'
import { Quiz } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import { FaRegSadTear } from 'react-icons/fa'

export default function Home() {
  const { SetQuizData, QuizData } = useContext(UserContext)

  if (QuizData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <FaRegSadTear className="text-6xl text-gray-400" />
        <p className="text-lg text-gray-600">No Quizez Created available.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center mx-auto my-5 justify-center min-h-screen p-2  rounded-xl"></div>
  )
}
