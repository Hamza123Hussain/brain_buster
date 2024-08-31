'use client'
import { Questions } from '@/utils/Quiz'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ReportCard from '@/components/Quiz/ReportCard'
import ScoreCard from '@/components/Quiz/ScoreCard'

const Report = () => {
  const [questions, setQuestions] = useState<Questions[]>([])
  const router = useRouter()

  useEffect(() => {
    // Use `window` to ensure the code runs only on the client-side
    if (typeof window !== 'undefined') {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      const questionsParam = urlParams.get('questions')

      if (questionsParam) {
        const decodedQuestions = JSON.parse(decodeURIComponent(questionsParam))
        setQuestions(decodedQuestions)
      }
    }
  }, [])

  return (
    <div className="p-6 bg-gray-900 text-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
        Quiz Report Card
      </h2>
      <ScoreCard />
      {questions.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {questions.map((question, index) => (
            <ReportCard key={index} index={index} question={question} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No questions available.</p>
      )}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push('/')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default Report
