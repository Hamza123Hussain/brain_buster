import { Quiz } from '@/utils/Quiz'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import { Question } from '@/utils/QuestionsInterface'

const Questions = ({ quiz }: { quiz: Quiz }) => {
  const { currentQuestionIndex, handleNextQuestion, score } =
    useContext(UserContext)
  const [selectedOption, setSelectedOption] = useState<Question>({
    OPTION: '',
    INDEX: -1,
    Correct: '',
  })

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      {quiz.Questions &&
        quiz.Questions.map(
          (question, index) =>
            currentQuestionIndex === index && (
              <div key={index} className="mb-6 text-white">
                <h3 className="font-semibold mb-2">
                  Q{index + 1}: {question.Question}
                </h3>
                <ul className="list-disc pl-5">
                  {question.Options.map((option: any, idx: any) => (
                    <li
                      key={idx}
                      onClick={() =>
                        setSelectedOption((prev: any) => ({
                          ...prev,
                          OPTION: option,
                          INDEX: idx,
                        }))
                      }
                      className={`mb-1 rounded-lg cursor-pointer px-2 ${
                        idx === selectedOption.INDEX
                          ? 'text-green-400 bg-gray-900'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )
        )}
      <div className="flex justify-end">
        <button
          disabled={selectedOption.INDEX === -1}
          onClick={() => {
            handleNextQuestion(
              quiz.NumberOfQuestions,
              selectedOption.OPTION,
              selectedOption.Correct,
              quiz.Questions,
              quiz.ID,
              score
            )
            setSelectedOption((prev: any) => ({ ...prev, INDEX: -1 }))
          }}
          className={`bg-green-500 px-4 text-white border-2 border-green-600 rounded-lg ${
            selectedOption.INDEX === -1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {currentQuestionIndex === quiz.NumberOfQuestions - 1
            ? 'Finish'
            : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default Questions
