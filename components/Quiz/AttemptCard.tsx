import { UserAttempt } from '@/utils/UserAttempts'
import React from 'react'

const AttemptCard = ({ attempt }: { attempt: UserAttempt }) => {
  const {
    QuizData: { CreatedBy, Difficulty, NumberOfQuestions, Topic },
    Score,
  } = attempt

  return (
    <div className="bg-gray-800 text-white shadow-lg rounded-lg p-4 w-[90vw] sm:w-[45vw] border-2 border-gray-700 cursor-pointer hover:bg-gray-700 transition-transform transform hover:scale-95">
      {/* Quiz information */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-green-400 mb-2">{Topic}</h3>
        <div className="flex justify-end items-center gap-2 text-gray-400">
          <h6>Created By</h6>
          <span className="font-extrabold">{CreatedBy}</span>
        </div>
      </div>
      <p className="text-gray-300 mb-1">
        <strong>Difficulty:</strong> {Difficulty}
      </p>
      <p className="text-gray-300 mb-1">
        <strong>Number Of Questions:</strong> {NumberOfQuestions}
      </p>

      {/* Attempt information */}
      <div className="flex justify-end items-center">
        <p className="text-gray-300 mb-1">
          <strong>Score:</strong> {Score ? Score : 0} / {NumberOfQuestions}
        </p>
      </div>
    </div>
  )
}

export default AttemptCard
