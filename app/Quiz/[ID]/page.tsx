'use client'
import Loader from '@/components/Loader'
import Questions from '@/components/Quiz/QuizCard'
import { fetchDocumentByID } from '@/functions/Quiz/GettingAsingleDoc'
import { Quiz } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
const QuizCard = ({ params }: { params: any }) => {
  const [quiz, setQuizData] = useState<Quiz | null>(null)
  const { loading, setLoading, handleNextQuestion, currentQuestionIndex } =
    useContext(UserContext)
  useEffect(() => {
    const GetData = async () => {
      setLoading(true)
      try {
        const data = await fetchDocumentByID(params.ID)
        if (data) {
          setQuizData(data)
        }
      } catch (error) {
        console.log('ERROR IN FUNCTION :', error)
      } finally {
        setLoading(false)
      }
    }
    GetData()
  }, [params.ID, setLoading])
  if (loading) {
    return <Loader />
  }
  if (!quiz) {
    return <div>No quiz found.</div>
  }
  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto my-5 shadow-blue-700 w-full md:w-2/3 lg:w-1/2 p-6">
      <h2 className="text-2xl font-bold text-center mb-4">{quiz.Topic}</h2>
      <p className="text-center text-gray-600 mb-6 flex flex-col">
        <span>Number Of Questions : {quiz.NumberOfQuestions} </span>
        <span>Difficulty: {quiz.Difficulty}</span>
      </p>
      <Questions quiz={quiz} />
      <div className=" flex justify-end">
        <button
          onClick={() => handleNextQuestion(quiz.NumberOfQuestions)}
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
export default QuizCard
