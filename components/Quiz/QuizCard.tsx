import { Quiz } from '@/utils/BlogInterface'
import React from 'react'

const Questions = ({ quiz }: { quiz: Quiz }) => {
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  // const [selectedOption, setSelectedOption] = useState('')

  // useEffect(() => {
  //   // Reset the selected option when the question changes
  //   setSelectedOption('')
  // }, [currentQuestionIndex])
  // const handleAnswerSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSelectedOption(e.target.value)
  //   }
  //   const handleNextQuestion = () => {
  //     if (currentQuestionIndex < QuizData.length - 1) {
  //       setCurrentQuestionIndex(currentQuestionIndex + 1)
  //     } else {
  //       alert('You have completed the quiz!')
  //     }
  //   }
  //   const currentQuestion = QuizData[currentQuestionIndex]

  return (
    <>
      {/* Ensure Questions is defined before mapping */}
      {quiz.Questions &&
        quiz.Questions.map((question, index) => (
          <div key={index} className="mb-6 text-black">
            <h3 className="font-semibold mb-2">
              Q{index + 1}: {question.Question}
            </h3>
            <ul className="list-disc pl-5">
              {question.Options.map((option: any, idx: any) => (
                <li key={idx} className="mb-1">
                  {option}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gray-500">
              Explanation: {question.Explanation}
            </p>
          </div>
        ))}
    </>
  )
}

export default Questions
