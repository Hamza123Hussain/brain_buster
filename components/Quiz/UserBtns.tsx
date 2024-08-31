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
    localStorage.removeItem('isDataLoaded')
    const QuizData = encodeURIComponent(JSON.stringify(Quiz_element))
    Router.push(`/Comment?QuizData=${QuizData}`)
  }

  const PathName = usePathname()

  return (
    <div className="flex justify-end items-center gap-2">
      {PathName !== '/Comment' && (
        <button
          onClick={GoToFeedBack}
          className="text-white border-2 border-gray-700 hover:bg-purple-600 bg-purple-500 px-3 py-1 rounded-lg text-xs sm:text-sm transition-all"
        >
          View Feedback
        </button>
      )}
      {PathName === '/dashboard' && (
        <button
          onClick={DeleteQuiz}
          className="text-white border-2 border-gray-700 hover:bg-red-700 bg-red-600 px-3 py-1 rounded-lg text-xs sm:text-sm transition-all"
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default UserBtns
