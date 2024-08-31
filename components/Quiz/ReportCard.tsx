import { Questions } from '@/utils/Quiz'
import React from 'react'

const ReportCard = ({
  index,
  question,
}: {
  index: number
  question: Questions
}) => {
  return (
    <div
      key={index}
      className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg text-gray-200"
    >
      <h3 className="text-xl font-semibold mb-2 text-white">
        Question {index + 1}
      </h3>
      <p className="text-gray-300 mb-2">
        <strong>Question:</strong> {question.Question}
      </p>
      <p className="text-gray-300 mb-2">
        <strong>Correct Answer:</strong> {question.Correct_Answer}
      </p>
      <p className="text-gray-300">
        <strong>Explanation:</strong> {question.Explanation}
      </p>
    </div>
  )
}

export default ReportCard
