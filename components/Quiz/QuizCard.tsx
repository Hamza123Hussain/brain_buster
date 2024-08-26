import { Quiz } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import { Option } from 'lucide-react'
import React, { useContext, useState } from 'react'
//data types for selected option
const Questions = ({
  quiz,
  selectedOption,
  setSelectedOption,
}: {
  quiz: Quiz
  selectedOption: any
  setSelectedOption: any
}) => {
  const { currentQuestionIndex } = useContext(UserContext)
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
                      onClick={() =>
                        setSelectedOption((PREV: any) => ({
                          ...PREV,
                          OPTION: Option,
                          INDEX: idx,
                        }))
                      }
                      key={idx}
                      className={`mb-1 rounded-lg cursor-pointer px-2 ${
                        idx === selectedOption.INDEX
                          ? 'text-green-500 bg-black '
                          : ''
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
    </>
  )
}

export default Questions
