import { Quiz } from '@/utils/Quiz'
import { UserContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import UserBtns from './UserBtns'
const DisplayCard = ({ element }: { element: Quiz }) => {
  const Router = useRouter()
  const { setscore, setCurrentQuestionIndex } = useContext(UserContext)
  const MoveToQuiz = () => {
    setscore(0)
    setCurrentQuestionIndex(0)
    Router.push(`/Quiz/${element.ID}`)
  }
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[45vw] shadow-slate-800 border-2 border-slate-900 cursor-pointer hover:bg-[#f2f2f2] transition-transform transform hover:scale-90"
      key={element.ID}
      onClick={MoveToQuiz} // Click anywhere on the card routes to the quiz page
    >
      <div className="flex flex-col md:flex-row justify-between items-center mt-3">
        <h3 className="text-xl font-semibold text-cyan-700 mb-2">
          {element.Topic}
        </h3>
        <div className="flex justify-end items-center gap-2 text-gray-700">
          <h6>Created By</h6>
          <span className="font-extrabold">{element.CreatedBy}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-1">
        <strong>Difficulty:</strong> {element.Difficulty}
      </p>
      <p className="text-gray-600">
        <strong>Number Of Questions:</strong> {element.NumberOfQuestions}
      </p>
      <UserBtns Quiz_element={element} />
    </div>
  )
}

export default DisplayCard
