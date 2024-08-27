'use client'
import AddComment from '@/components/Quiz/AddComment'
import CommentCard from '@/components/Quiz/CommentCard'
import DisplayCard from '@/components/Quiz/DisplayCard'
import { UserContext } from '@/utils/Context'
import { CommentData } from '@/utils/Quiz'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
const CommentPage = () => {
  const { QUIZDATA, setData } = useContext(UserContext)
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
