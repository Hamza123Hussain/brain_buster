import { Quiz } from '@/utils/BlogInterface'
import { useRouter } from 'next/navigation'
import React from 'react'

const DisplayCard = ({ element }: { element: Quiz }) => {
  const Router = useRouter()
  return (
    <div
      onClick={() => Router.push(`/Quiz/${element.ID}`)}
      className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[45vw] shadow-slate-800 border-2 border-slate-900  cursor-pointer hover:bg-[#c2f1f1] transition-transform transform hover:scale-90"
      key={element.ID}
    >
      <h3 className="text-xl font-semibold text-cyan-700 mb-2">
        {element.Topic}
      </h3>
      <p className="text-gray-600 mb-1">
        <strong>Difficulty:</strong> {element.Difficulty}
      </p>
      <p className="text-gray-600">
        <strong>Number Of Questions:</strong> {element.NumberOfQuestions}
      </p>
      <div className=" flex justify-end items-center gap-2 text-gray-700">
        <h6>Created By</h6>
        <span className=" font-extrabold">{element.CreatedBy}</span>
      </div>
    </div>
  )
}

export default DisplayCard
