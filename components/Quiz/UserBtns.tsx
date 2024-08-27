import { deletequiz } from '@/functions/Quiz/DeletingAQuiz'
import { UserContext } from '@/utils/Context'
import { Quiz } from '@/utils/Quiz'
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext } from 'react'
const UserBtns = ({ Quiz_element }: { Quiz_element: Quiz }) => {
  const Router = useRouter()
  const { userData } = useContext(UserContext)
  const DeleteQuiz = async (event: React.MouseEvent) => {
    event.stopPropagation() // Prevents the click from bubbling up to the card
    const Deleted = await deletequiz(userData.UserID, Quiz_element.ID)
    if (Deleted) {
      window.location.reload()
    }
  }
  const GoToFeedBack = async (event: React.MouseEvent) => {
    event.stopPropagation() // Prevents the click from bubbling up to the card
    const QuizData = encodeURIComponent(JSON.stringify(Quiz_element))
    Router.push(`/Comment?QuizData=${QuizData}`)
  }
  const PathName = usePathname()
  return (
    <div className="flex justify-end items-center">
      {PathName != '/Comment' && (
        <button
          onClick={GoToFeedBack}
          className="text-white border-2 border-gray-200 hover:bg-blue-400 bg-blue-600 px-2 rounded-lg"
        >
          View FeedBack
        </button>
      )}
      {PathName === '/dashboard' && (
        <button
          onClick={DeleteQuiz} // Only the button click should trigger delete
          className="text-white border-2 border-gray-200 hover:bg-red-400 bg-red-600 px-2 rounded-lg"
        >
          Delete
        </button>
      )}
    </div>
  )
}
export default UserBtns
