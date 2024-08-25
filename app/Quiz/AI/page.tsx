'use client'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import CreateBlogFields from '@/components/Blog/CreateBlogFields'
import { QuizCreate } from '@/utils/QuizCreate'
import { fetchAiQuestions } from '@/functions/Quiz/CreateAQuiz'
const WriteWithAI = () => {
  const Router = useRouter()
  const { userData, setLoading, SetQuizData } = useContext(UserContext)
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
        console.log(result)
        SetQuizData(result)
        setLoading(false)
        toast.success('QUIZ HAS BEEN MADE')
        Router.push('/')
      }
    } catch (error) {
      console.log('ERROR IN FUNCTION', error)
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to from-orange-800  to-gray-300">
        Create a New Blog With AI
      </h1>
      <div className="w-full space-y-6">
        <CreateBlogFields CreateValue={CreateValue} SetValue={SetValue} />
        <div className=" flex gap-2">
          <button
            onClick={handleFetchQuestions}
            className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteWithAI
