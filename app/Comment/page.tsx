'use client'
import DisplayCard from '@/components/Quiz/DisplayCard'
import { Quiz } from '@/utils/Quiz'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const CommentPage = () => {
  const [QUIZDATA, setData] = useState<Quiz | undefined>(undefined)
  const [newComment, setNewComment] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Query = window.location.search
      const URLParam = new URLSearchParams(Query)
      const Data = URLParam.get('QuizData')
      if (Data) {
        const DecodeData = JSON.parse(decodeURIComponent(Data))
        setData(DecodeData)
      }
    }
  }, [])
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
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Ensure QUIZDATA is defined before rendering DisplayCard */}
      {QUIZDATA && (
        <div className="mb-8">
          <DisplayCard element={QUIZDATA} />
        </div>
      )}
      <form
        onSubmit={handleAddComment}
        className=" flex gap-2 items-center mb-4
      "
      >
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

      <div className="space-y-4">
        {/* Ensure QUIZDATA and comments are defined */}
        {QUIZDATA?.comments?.map((comment) => (
          <div
            key={comment.CommentID}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <div className=" flex items-center gap-2">
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
        ))}
      </div>
    </div>
  )
}

export default CommentPage
