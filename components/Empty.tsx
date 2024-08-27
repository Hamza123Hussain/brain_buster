import React from 'react'
import { FaRegFrown } from 'react-icons/fa'
const Empty = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center mx-auto items-center mt-20">
      {}
      <p className="text-center text-lg md:text-4xl text-gray-500">{text}</p>
    </div>
  )
}
export default Empty
