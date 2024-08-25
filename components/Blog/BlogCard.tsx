import { BLOG } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { FaRegCommentDots } from 'react-icons/fa'

const BlogCard = ({ Blog }: { Blog: BLOG }) => {
  const { userData } = useContext(UserContext)
  const Router = useRouter()

  return (
    <div className=" w-[70vw]  sm:w-[50vw] mx-auto border border-gray-300 rounded-lg shadow-md bg-slate-50 overflow-hidden mb-4">
      {Blog?.BlogImageURL && (
        <div className="relative w-[70vw] sm:w-fit mx-auto ">
          <Image
            src={Blog?.BlogImageURL}
            alt={Blog?.Title}
            layout="responsive"
            width={800}
            height={600}
            className="w-full object-cover rounded-t-lg"
          />
        </div>
      )}
      {/* User Details and Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-200 ">
        {/* User Details */}
        <div className="flex items-center mb-2 sm:mb-0">
          <Image
            src={Blog?.UserImage}
            alt="User Avatar"
            width={30}
            height={30}
            className="rounded-full border border-blue-300"
          />
          <div className="ml-3">
            <p className="text-xs font-semibold text-blue-600">
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
      </div>

      {/* Blog Title */}
      <div className="px-4 py-2 border-b border-gray-200">
        <h2 className="text-xs sm:text-lg font-bold text-gray-900 mb-1">
          {Blog?.Title}
        </h2>
      </div>

      {/* Blog Image (if any) */}

      {/* Blog Content */}
      <div className="px-4 py-2">
        <p className="text-xs sm:text-lg text-justify text-gray-800 mb-4">
          {Blog?.Text}
        </p>
      </div>

      {/* Interaction Buttons */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 ">
        <button
          onClick={() => Router.push(`/Blog/Comments/${Blog?.PostID}`)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          <FaRegCommentDots />
          <span className="text-sm font-medium">
            {Blog.comments.length} Comments
          </span>
        </button>
      </div>
    </div>
  )
}

export default BlogCard
