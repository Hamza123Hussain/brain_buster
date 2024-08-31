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
    <div className="text-white">
      {quiz.Questions &&
        quiz.Questions.map(
          (question, index) =>
            currentQuestionIndex === index && (
              <div
                onClick={() => {
                  setSelectedOption((prev: Question) => ({
                    ...prev,
                    Correct: question.Correct_Answer,
                  }))
                }}
                key={index}
                className="mb-6"
              >
                <h3 className="font-semibold mb-5 text-sm md:text-xl">
                  Q{index + 1}: {question.Question}
                </h3>
                <ul className="list-disc pl-5 text-sm  space-y-2">
                  {question.Options.map((option: any, idx: any) => (
                    <li
                      onClick={() =>
                        setSelectedOption((prev: any) => ({
                          ...prev,
                          OPTION: option,
                          INDEX: idx,
                        }))
                      }
                      key={idx}
                      className={`mb-1 rounded-lg cursor-pointer px-4 py-2 ${
                        idx === selectedOption.INDEX
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-700 hover:bg-gray-600'
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
          className="bg-purple-500 px-6 py-2 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-600"
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
