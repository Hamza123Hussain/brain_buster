import { CommentData } from '@/utils/Quiz'
import React from 'react'

const CommentCard = ({ comment }: { comment: CommentData }) => {
  return (
    <div
      key={comment.CommentID}
      className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="flex sm:flex-row flex-col justify-between sm:items-center mb-4">
        <div className=" flex items-center">
          <img
            src={
              'https://english.cdn.zeenews.com/sites/default/files/2022/05/02/1038115-alia-bhatt-hania-aamir.jpg'
            }
            width={40}
            height={40}
            alt=""
            className="rounded-full mr-4"
          />{' '}
          <h4 className="text-lg font-semibold">{comment.UserName}</h4>
        </div>
        <div>
          {' '}
          <span className="text-sm text-gray-500">
            {new Date(comment.CreatedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
      <p className="text-gray-700">{comment.Text}</p>
    </div>
  )
}

export default CommentCard
