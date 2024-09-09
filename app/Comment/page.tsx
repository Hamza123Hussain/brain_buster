'use client'
import AddComment from '@/components/Quiz/AddComment'
import CommentCard from '@/components/Quiz/CommentCard'
import DisplayCard from '@/components/Quiz/DisplayCard'
import CommentLoader from '@/functions/Quiz/commentLoader'
import { UserContext } from '@/utils/Context'
import { CommentData } from '@/utils/Quiz'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { FaRegComments } from 'react-icons/fa' // Import an icon for no comments

const CommentPage = () => {
  const { QUIZDATA, setData, userData, loading } = useContext(UserContext)
  const Router = useRouter()
  useEffect(() => {
    // Check if we are in the browser environment
    if (typeof window !== 'undefined') {
      // Retrieve the 'isDataLoaded' flag from localStorage
      const isDataLoaded = localStorage.getItem('isDataLoaded')
      // Only fetch data from URL parameters if 'isDataLoaded' is not set
      if (!isDataLoaded) {
        const Query = window.location.search
        const URLParam = new URLSearchParams(Query)
        const Data = URLParam.get('QuizData')
        if (Data) {
          const DecodeData = JSON.parse(decodeURIComponent(Data))
          setData(DecodeData)
          // Set the 'isDataLoaded' flag to true in localStorage
          localStorage.setItem('isDataLoaded', 'true')
        }
      }
    }
  }, [setData])

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-gray-900 text-white">
      {/* Ensure QUIZDATA is defined before rendering DisplayCard */}
      {QUIZDATA && (
        <div className="mb-8">
          <DisplayCard element={QUIZDATA} />
        </div>
      )}
      {userData ? (
        <AddComment />
      ) : (
        <div className=" flex justify-center items-center mb-4 w-full">
          <button
            onClick={() => Router.push('/Login')}
            className="bg-[#4CAF50] px-7 py-2 border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#1C1C1C] text-[#FFFFFF] rounded-lg"
          >
            Login To Add A Comment
          </button>
        </div>
      )}
      <div className="space-y-4">
        {loading ? (
          <CommentLoader />
        ) : QUIZDATA?.comments?.length ? (
          QUIZDATA.comments.map((comment: CommentData) => (
            <CommentCard comment={comment} key={comment.CommentID} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg bg-gray-800">
            <FaRegComments className="text-gray-500 text-3xl mb-2" />
            <p className="text-gray-400 capitalize">
              No feedback given yet. Be the first to share your thoughts on the
              quiz!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentPage
