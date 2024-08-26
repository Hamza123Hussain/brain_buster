'use client'
import { UserContext } from '@/utils/Context'
import { Questions } from '@/utils/Quiz'
import { useContext, useEffect, useState } from 'react'
import { FaFrown, FaMeh, FaSmile } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const Report = () => {
  const [questions, setQuestions] = useState<Questions[]>([])
  const { score, total } = useContext(UserContext)
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

  // Calculate percentage score
  const percentageScore = (score / total) * 100

  // Determine icon based on score percentage
  let icon
  if (percentageScore < 50) {
    icon = <FaFrown size={50} className="text-red-500" />
  } else if (percentageScore >= 50 && percentageScore < 75) {
    icon = <FaMeh size={50} className="text-yellow-500" />
  } else if (percentageScore >= 75 && percentageScore < 85) {
    icon = <FaSmile size={50} className="text-green-500" />
  } else {
    icon = <FaSmile size={50} className="text-blue-500" /> // You can change this icon for scores above 85%
  }

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Quiz Report Card</h2>
      <div className="text-center mb-4">
        <p className="text-xl font-semibold mb-2">
          Your Score: {score} / {total}
        </p>
        <div className=" flex justify-center items-center"> {icon}</div>
      </div>
      {questions.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {questions.map((question, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 border rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">
                Question {index + 1}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Question:</strong> {question.Question}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Correct Answer:</strong> {question.Correct_Answer}
              </p>
              <p className="text-gray-700">
                <strong>Explanation:</strong> {question.Explanation}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No questions available.</p>
      )}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default Report
