import { RemoveBlog } from '@/functions/Blog/DeleteBlog'
import { BLOG } from '@/utils/BlogInterface'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { FaRegCommentDots } from 'react-icons/fa'
import Image from 'next/image'

const UserBlogCard = ({ Blog }: { Blog: BLOG }) => {
  const Router = useRouter()

  const DeleteDoc = async () => {
    const Removed = await RemoveBlog(Blog.PostID)
    if (Removed) {
      toast.success('BLOG HAS BEEN DELETED')
      window.location.reload()
    }
  }

  return (
    <div className="flex mx-auto flex-col w-[80vw]  justify-center border border-gray-300 rounded-lg shadow-lg bg-white mb-6">
      {/* Blog Image */}
      {Blog.BlogImageURL && (
        <div className="mb-4">
          <Image
            src={Blog.BlogImageURL}
            alt={Blog.Title}
            width={600}
            height={400}
            className=" w-full rounded-t-lg"
          />
        </div>
      )}

      {/* Blog Title */}
      <h2 className="p-4  text-2xl font-bold text-gray-900 mb-2">
        {Blog.Title}
      </h2>

      {/* User Details and Date */}
      <div className="p-4  flex flex-col sm:flex-row items-center justify-between mb-4">
        <div className="flex gap-3 items-center">
          <Image
            src={
              Blog.UserImage ||
              'https://www.brandsynario.com/wp-content/uploads/2024/03/Hania-Amir-2.jpg'
            }
            alt={Blog.UserName || 'User Image'}
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-200"
          />
          <h6 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
            {Blog.UserName}
          </h6>
        </div>
        <p className="text-gray-500 text-sm sm:text-base">
          Created At{' '}
          {new Date(Blog.CreatedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      {/* Blog Content */}
      <p className="text-md p-4  text-justify text-gray-800 mb-4 font-medium">
        {Blog.Text}
      </p>

      {/* Buttons and Actions */}
      <div className="flex p-4  sm:flex-row flex-col gap-5 justify-between items-center">
        <button
          onClick={() => Router.push(`/Blog/Comments/${Blog?.PostID}`)}
          className="flex items-center gap-2 py-2 px-4 bg-customBg text-white rounded-lg hover:bg-rose-900 focus:outline-none"
        >
          <FaRegCommentDots /> View Comments
        </button>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => Router.push(`/Blog/Update/${Blog.PostID}`)}
            className="bg-blue-600 px-6 py-1 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Update
          </button>
          <button
            onClick={DeleteDoc}
            className="bg-red-600 px-6 py-1 text-white rounded-lg hover:bg-red-700 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserBlogCard
