import { deleteComment } from '@/functions/Quiz/DeleteComment'
import { UserContext } from '@/utils/Context'
import { Quiz } from '@/utils/Quiz'
import React, { useContext } from 'react'
const DeleteComment = ({ ID }: { ID: string }) => {
  const { setData, QUIZDATA, setLoading } = useContext(UserContext)
  const handleDelete = async () => {
    if (QUIZDATA && ID) {
      setLoading(true)
      try {
        const Data = await deleteComment(ID, QUIZDATA.id)
        if (Data) {
          setLoading(false)
          setData((prev: Quiz) => ({
            ...prev,
            comments: prev.comments.filter((c) => c.CommentID !== ID),
          }))
        }
      } catch (error) {
        setLoading(false)
        console.error('Error deleting comment:', error)
      }
    }
  }
  return (
    <div className=" justify-end flex ">
      <button
        onClick={handleDelete}
        className="bg-red-500 px-2 rounded-lg border-2 border-slate-200 hover:bg-red-700 text-white transition duration-300"
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteComment
