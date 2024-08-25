import React from 'react'

const QuizCard = () => {
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
    <div>
      {/* <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border-slate-900 border-2">
  <h2 className="text-[12px] font-bold text-gray-800 mb-4">
    {currentQuestion.Question}
  </h2>
  <div className="flex flex-col gap-2">
    {currentQuestion.Options.map((option: any) => (
      <label
        key={option}
        className="flex items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
      >
        <input
          type="radio"
          name="answer"
          value={option}
          checked={selectedOption === option}
          onChange={handleAnswerSelect}
          className="mr-2"
        />
        <span className="text-[12px]  text-gray-700">{option}</span>
      </label>
    ))}
  </div>
  <button
    onClick={handleNextQuestion}
    className="w-full mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
  >
    Next
  </button>
</div> */}
    </div>
  )
}

export default QuizCard
