import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
const AddComment = () => {
  const { QUIZDATA, setData } = useContext(UserContext)
  const [newComment, setNewComment] = useState('')
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && QUIZDATA) {
      const newCommentData = {
        CommentID: Math.random().toString(36).substring(2, 15), // Generate a random ID for demo purposes
        Text: newComment,
        UserName: 'Current User', // Replace with the actual user's name
        UserImage: '/path/to/user/image', // Replace with the actual user's image URL
        CreatedAt: Date.now(),
      }
      setNewComment('')
    }
  }
  return (
    <form onSubmit={handleAddComment} className=" flex gap-2 items-center mb-4">
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Give Your FeedBack"
        className="w-full p-2 border border-gray-300 rounded-xl "
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
