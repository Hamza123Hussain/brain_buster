import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import CreatedQuizzes from './CreatedQuizzes'
import AttemptingQuizDetails from '@/components/Quiz/AttemptingQuizDetails'
const UserQuizzes = () => {
  const [activeTab, setActiveTab] = useState('created') // State for active tab
  const Router = useRouter()
  return (
    <div className="flex flex-col px-2 min-h-screen mx-auto ">
      <div className="mx-auto gap-2 my-5">
        <button
          onClick={() => Router.push('/Quiz/AI')}
          className="bg-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          Make A Quiz With AI
        </button>
      </div>

      {/* Tabs for Created Quizzes and Attempted Quizzes */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('created')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'created'
              ? 'bg-orange-400 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          Created Quizzes
        </button>
        <button
          onClick={() => setActiveTab('attempted')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'attempted'
              ? 'bg-orange-400 text-white'
              : 'bg-gray-200 text-gray-600'
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
