import React from 'react'
import { FaRegFrown } from 'react-icons/fa'

const Empty = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-20 p-6 bg-gray-800 rounded-lg shadow-lg">
      {icon && <div className="text-gray-400 mb-4">{icon}</div>}
      <p className="text-center text-lg md:text-4xl text-gray-400">{text}</p>
    </div>
  )
}

export default Empty
