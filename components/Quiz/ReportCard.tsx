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
    <div key={index} className="p-4 bg-gray-100 border rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">Question {index + 1}</h3>
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
  )
}

export default ReportCard
