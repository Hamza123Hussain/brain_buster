import { Quiz } from '@/utils/Quiz'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import { Question } from '@/utils/QuestionsInterface'
const Questions = ({ quiz }: { quiz: Quiz }) => {
  const { currentQuestionIndex, handleNextQuestion } = useContext(UserContext)
  const [selectedOption, setSelectedOption] = useState<Question>({
    OPTION: '',
    INDEX: -1,
    Correct: '',
  })
  return (
    <div>
      {quiz.Questions &&
        quiz.Questions.map(
          (question, index) =>
            currentQuestionIndex == index && (
              <div
                onClick={() => {
                  setSelectedOption((prev: Question) => ({
                    ...prev,
                    Correct: question.Correct_Answer,
                  }))
                }}
                key={index}
                className="mb-6 text-black"
              >
                <h3 className="font-semibold mb-2">
                  Q{index + 1}: {question.Question}
                </h3>
                <ul className="list-disc pl-5">
                  {question.Options.map((option: any, idx: any) => (
                    <li
                      onClick={() =>
                        setSelectedOption((PREV: any) => ({
                          ...PREV,
                          OPTION: option,
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
      <div className=" flex justify-end">
        <button
          disabled={selectedOption.INDEX === -1}
          onClick={() => {
            handleNextQuestion(
              quiz.NumberOfQuestions,
              selectedOption.OPTION,
              selectedOption.Correct,
              quiz.Questions
            )
            setSelectedOption((prev: any) => ({ ...prev, INDEX: -1 }))
          }}
          className=" bg-blue-400 px-4 text-white border-gray-100 rounded-lg"
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
