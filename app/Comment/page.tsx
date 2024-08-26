'use client'
import { Quiz } from '@/utils/Quiz'
import React, { useEffect, useState } from 'react'

const CommentPage = () => {
  const [QUIZDATA, setData] = useState<Quiz[]>([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Query = window.location.search
      const URLParam = new URLSearchParams(Query)
      const Data = URLParam.get('QuizData')

      if (Data) {
        const DecodeData = JSON.parse(decodeURIComponent(Data))

        console.log('THE DATA OF THE QUIZ ', DecodeData)
      }
    }
  }, [])
  return <div></div>
}

export default CommentPage
