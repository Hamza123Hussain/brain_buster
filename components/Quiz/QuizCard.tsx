import { Quiz } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
const Questions = ({ quiz }: { quiz: Quiz }) => {
  const { currentQuestionIndex } = useContext(UserContext)
  const [selectedOption, setSelectedOption] = useState('')
  return (
    <>
      {quiz.Questions &&
        quiz.Questions.map(
          (question, index) =>
            currentQuestionIndex == index && (
              <div key={index} className="mb-6 text-black">
                <h3 className="font-semibold mb-2">
                  Q{index + 1}: {question.Question}
                </h3>
                <ul className="list-disc pl-5">
                  {question.Options.map((option: any, idx: any) => (
                    <li
                      onClick={() => setSelectedOption(idx)}
                      key={idx}
                      className={`mb-1 rounded-lg cursor-pointer px-2 ${
                        idx === selectedOption ? 'text-green-500 bg-black ' : ''
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  Explanation: {question.Explanation}
                </p>
              </div>
            )
        )}
    </>
  )
}

export default Questions
