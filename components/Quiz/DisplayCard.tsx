import { deletequiz } from '@/functions/Quiz/DeletingAQuiz'
import { Quiz } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const DisplayCard = ({ element }: { element: Quiz }) => {
  const Router = useRouter()
  const PathName = usePathname()
  const { userData } = useContext(UserContext)
  // Handle delete button click to delete the quiz
  const DeleteQuiz = async (event: React.MouseEvent) => {
    event.stopPropagation() // Prevents the click from bubbling up to the card
    const Deleted = await deletequiz(userData.UserID, element.ID)
    if (Deleted) {
      window.location.reload()
    }
  }
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[45vw] shadow-slate-800 border-2 border-slate-900 cursor-pointer hover:bg-[#f2f2f2] transition-transform transform hover:scale-90"
      key={element.ID}
      onClick={() => Router.push(`/Quiz/${element.ID}`)} // Click anywhere on the card routes to the quiz page
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
      {PathName === '/dashboard' && (
        <div className="flex justify-end items-center">
          <button
            onClick={DeleteQuiz} // Only the button click should trigger delete
            className="text-white border-2 border-gray-200 hover:bg-red-400 bg-red-600 px-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default DisplayCard
