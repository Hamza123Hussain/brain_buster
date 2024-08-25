import { BLOG } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { FaRegCommentDots } from 'react-icons/fa'

const SingleCard = ({ Blog }: { Blog: any }) => {
  const { userData } = useContext(UserContext)
  const Router = useRouter()

  return (
    <div className="w-[80vw]  mx-auto border border-gray-300 rounded-lg shadow-sm bg-white overflow-hidden mb-4">
      {/* User Details and Title */}
      <div className="flex flex-col items-start  gap-4 justify-between p-2 border-b border-gray-200">
        {/* User Details */}
        <div className="flex items-center mb-2 sm:mb-0 ">
          <Image
            src={Blog?.UserImage}
            alt="User Avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-xs font-semibold text-gray-800">
              {Blog?.CreatedBy}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(Blog?.CreatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Blog Title */}
        <div className="flex-1 ">
          <h2 className="text-sm sm:text-lg font-bold text-gray-900">
            {Blog?.Title}
          </h2>
        </div>
      </div>

      {/* Blog Image (if any) */}
      {Blog?.BlogImageURL && (
        <div className="relative w-full">
          <Image
            src={Blog?.BlogImageURL}
            alt={Blog?.Title}
            layout="responsive"
            width={800} // Dynamic width, change to suit your layout
            height={600} // Dynamic height, change to suit your layout
            className="w-full rounded-t-lg"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="px-4 py-2">
        <p className="text-xs sm:text-lg text-justify text-gray-800 mb-4">
          {Blog?.Text}
        </p>
      </div>
    </div>
  )
}

export default SingleCard
