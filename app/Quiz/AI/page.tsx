'use client'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { QuizCreate } from '@/utils/QuizCreate'
import { fetchAiQuestions } from '@/functions/Quiz/CreateAQuiz'
import Loader from '@/components/Loader'
import CreateQuizFields from '@/components/Quiz/CreateQuizFields'

const WriteWithAI = () => {
  const Router = useRouter()
  const { userData, setLoading, loading } = useContext(UserContext)
  const [CreateValue, SetValue] = useState<QuizCreate>({
    Topic: '',
    Image: null,
    DifficultyLevel: '',
    NumberOfQuestion: 3,
  })

  const handleFetchQuestions = async () => {
    setLoading(true)
    try {
      const result = await fetchAiQuestions(
        CreateValue.Topic,
        CreateValue.NumberOfQuestion,
        userData.email,
        CreateValue.DifficultyLevel,
        userData.Name
      )
      if (result) {
        // console.log(result)
        setLoading(false)
        toast.success('QUIZ HAS BEEN MADE')
        Router.push('/')
      }
    } catch (error) {
      console.log('ERROR IN FUNCTION', error)
      setLoading(false)
    }
  }

  if (loading) return <Loader />

  return (
    <div className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
        Create a New Quiz With AI
      </h1>
      <div className="w-full space-y-6">
        <CreateQuizFields CreateValue={CreateValue} SetValue={SetValue} />
        <div className="flex gap-2">
          <button
            onClick={handleFetchQuestions}
            className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteWithAI
