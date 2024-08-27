import { NewComment } from '@/functions/Quiz/CreatingAComment'
import { UserContext } from '@/utils/Context'
import { CommentData, Quiz } from '@/utils/Quiz'
import React, { useContext, useState } from 'react'
const AddComment = () => {
  const { QUIZDATA, setData, userData, setLoading } = useContext(UserContext)
  const [newComment, setNewComment] = useState('')

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && QUIZDATA) {
      setLoading(true)
      try {
        const Data: CommentData = await NewComment(
          newComment,
          userData.email,
          QUIZDATA.ID,
          userData.imageUrl,
          userData.Name
        )
        setData((prev: Quiz) => ({
          ...prev,
          comments: [...(prev.comments || []), Data], // Initialize comments if undefined
        }))
        setLoading(false)
        setNewComment('') // Clear the comment input field
      } catch (error) {
        console.error('Error adding comment:', error)
        setLoading(false)
      }
    }
  }
  return (
    <form onSubmit={handleAddComment} className="flex gap-2 items-center mb-4">
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Give Your FeedBack"
        className="w-full p-2 border border-gray-300 rounded-xl"
        type="text"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  )
}
export default AddComment
