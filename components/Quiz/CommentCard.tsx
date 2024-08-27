import { CommentData } from '@/utils/Quiz'
import React, { useContext } from 'react'
import DeleteComment from './DeleteComment'
import { UserContext } from '@/utils/Context'
import Image from 'next/image'
const CommentCard = ({ comment }: { comment: CommentData }) => {
  const { userData } = useContext(UserContext)
  return (
    <div
      key={comment.CommentID}
      className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="flex sm:flex-row flex-col justify-between sm:items-center mb-4">
        <div className="flex items-center gap-2">
          <Image
            src={comment.UserImage}
            width={20}
            height={20}
            alt={comment.UserName}
            className="rounded-full "
          />
          <h4 className="text-lg font-semibold">{comment.UserName}</h4>
        </div>
        <div>
          <span className="text-sm text-gray-500">
            {new Date(comment.CreatedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{comment.Text}</p>
      {userData.email === comment.UserEmail && (
        <DeleteComment ID={comment.CommentID} />
      )}
    </div>
  )
}

export default CommentCard
