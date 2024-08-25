'use client'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Loader from '@/components/Loader'
import CreateBlogFields from '@/components/Blog/CreateBlogFields'
import { QuizCreate } from '@/utils/QuizCreate'
const WriteWithAI = () => {
  const { userData, loading, setLoading } = useContext(UserContext)
  const [CreateValue, SetValue] = useState<QuizCreate>({
    Topic: '',
    Image: null,
    DifficultyLevel: '',
    NumberOfQuestion: 3,
  })
  const Router = useRouter()
  const PlaceHolder = {
    Topic: 'Enter A Reasonable Prompt to Generate A Blog Topic',
    Text: 'Enter A Reasonable Prompt to Generate A Description For Your Blog',
  }

  if (loading) {
    return <Loader />
  }
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to from-orange-800  to-gray-300">
        Create a New Blog With AI
      </h1>
      <div className="w-full space-y-6">
        <CreateBlogFields
          PlaceHolder={PlaceHolder}
          CreateValue={CreateValue}
          SetValue={SetValue}
        />
        <div className=" flex gap-2">
          <button className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-dusty-rose">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteWithAI
