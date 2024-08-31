import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import CreatedQuizzes from './CreatedQuizzes'
import AttemptingQuizDetails from '@/components/Quiz/AttemptingQuizDetails'

const UserQuizzes = () => {
  const [activeTab, setActiveTab] = useState('created') // State for active tab
  const Router = useRouter()

  return (
    <div className="flex flex-col px-2 min-h-screen ">
      <div className="mx-auto gap-2 my-5">
        <button
          onClick={() => Router.push('/Quiz/AI')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Make A Quiz With AI
        </button>
      </div>

      {/* Tabs for Created Quizzes and Attempted Quizzes */}
      <div className="flex gap-4 mb-6 items-start justify-start">
        <button
          onClick={() => setActiveTab('created')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'created'
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          Created Quizzes
        </button>
        <button
          onClick={() => setActiveTab('attempted')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'attempted'
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          Attempted Quizzes
        </button>
      </div>
      {activeTab === 'created' ? <CreatedQuizzes /> : <AttemptingQuizDetails />}
    </div>
  )
}

export default UserQuizzes
