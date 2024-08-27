'use client'
import AddComment from '@/components/Quiz/AddComment'
import CommentCard from '@/components/Quiz/CommentCard'
import DisplayCard from '@/components/Quiz/DisplayCard'
import { UserContext } from '@/utils/Context'
import { CommentData } from '@/utils/Quiz'
import React, { useContext, useEffect } from 'react'
const CommentPage = () => {
  const { QUIZDATA, setData } = useContext(UserContext)
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
  }, [])

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Ensure QUIZDATA is defined before rendering DisplayCard */}
      {QUIZDATA && (
        <div className="mb-8">
          <DisplayCard element={QUIZDATA} />
        </div>
      )}
      <AddComment />
      <div className="space-y-4">
        {/* Ensure QUIZDATA and comments are defined */}
        {QUIZDATA?.comments?.map((comment: CommentData) => (
          <CommentCard comment={comment} key={comment.CommentID} />
        ))}
      </div>
    </div>
  )
}

export default CommentPage
