import { UserAttempt } from '@/utils/UserAttempts'
import React from 'react'
const AttemptCard = ({ attempt }: { attempt: UserAttempt }) => {
  const {
    QuizData: { CreatedBy, Difficulty, NumberOfQuestions, Topic },
    Score,
  } = attempt
  return (
    <div className="bg-white shadow-md rounded-lg p-2 w-[90vw] sm:w-[45vw] shadow-slate-800 border-2 border-slate-900 cursor-pointer hover:bg-[#f2f2f2] transition-transform transform hover:scale-90">
      {/* Quiz information */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-xl font-semibold text-cyan-700 mb-2">{Topic}</h3>
        <div className="flex justify-end items-center gap-2 text-gray-700">
          <h6>Created By</h6>
          <span className="font-extrabold">{CreatedBy}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-1">
        <strong>Difficulty:</strong> {Difficulty}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Number Of Questions:</strong> {NumberOfQuestions}
      </p>

      {/* Attempt information */}
      <div className=" flex justify-end items-center">
        <p className="text-gray-600 mb-1">
          <strong>Score:</strong> {Score} / {NumberOfQuestions}
        </p>
      </div>
    </div>
  )
}
export default AttemptCard
