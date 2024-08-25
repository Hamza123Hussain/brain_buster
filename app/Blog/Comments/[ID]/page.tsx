'use client'
import CommentCard from '@/components/Blog/CommentCard'
import SingleCard from '@/components/Blog/SingleCard'
import Loader from '@/components/Loader'
import { CreateWithAIComment } from '@/functions/Blog/CallingAI'
import { Addcomment } from '@/functions/Blog/Comment'
import { GETDoc } from '@/functions/Blog/GettingDoc'
import { BLOG, CommentData } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const BlogWithComments = ({ params }: { params: any }) => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [element, SetBlog] = useState<BLOG>()
  const [comment, setComment] = useState('')
  const [flag, setflag] = useState(false)
  console.log('USER DATA ', userData)
  const gETDATA = async () => {
    setLoading(true)
    const Data = await GETDoc(params.ID)
    if (Data) {
      SetBlog(Data)
      setLoading(false)
    }
  }
  const handleAddComment = async () => {
    toast.success('Comment added successfully')
    const data = await Addcomment(comment, userData.userID, params.ID)
    if (data) {
      setflag(!flag)
      setComment('')
    }
  }

  useEffect(() => {
    gETDATA()
  }, [flag])

  const callAi = async () => {
    const Data = await CreateWithAIComment(comment)
    if (Data) setComment(Data)
  }

  if (loading) {
    return <Loader />
  }
  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-md">
      <SingleCard Blog={element} />
      <div className="flex flex-col gap-4">
        <h1 className=" text-2xl font-extrabold p-2"> Comments</h1>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          rows={1}
          className="w-full p-2 border border-gray-300 rounded-lg resize-none"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          {' '}
          <button
            onClick={callAi}
            className="py-2 text-sm sm:text-base px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Generate Comment with AI
          </button>
          <button
            onClick={handleAddComment}
            className="py-2 px-4 text-sm sm:text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Comment
          </button>
        </div>
        {element?.comments && element.comments.length > 0 ? (
          element.comments.map((comment: CommentData) => (
            <CommentCard
              key={comment.CommentID}
              PostId={params.ID}
              setflag={setflag}
              comment={comment}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4 bg-gray-200 p-2 rounded-lg w-full">
            No comments on this blog
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogWithComments
