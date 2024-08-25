import { RemoveComment } from '@/functions/Blog/Comment'
import { CommentData } from '@/utils/BlogInterface'
import { Trash2Icon } from 'lucide-react'
import React from 'react'

const CommentCard = ({
  comment,
  setflag,
  PostId,
}: {
  comment: CommentData
  setflag: React.Dispatch<React.SetStateAction<boolean>>
  PostId: string
}) => {
  const deleteme = async () => {
    const data = await RemoveComment(PostId, comment.CommentID)
    if (data.success) {
      setflag(true) // Trigger re-fetch or update the parent state
    } else {
      console.error('Failed to delete comment:', data.message)
    }
  }

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-sm bg-gray-50 p-4 mb-4">
      <div className="flex items-start justify-between mb-2">
        <h1 className="text-lg font-semibold text-gray-800">{comment.Text}</h1>
        <button
          onClick={deleteme}
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          <Trash2Icon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-end">
        <span className="text-sm text-gray-500">{comment.UserName}</span>
      </div>
    </div>
  )
}

export default CommentCard
