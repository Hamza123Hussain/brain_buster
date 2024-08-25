'use client'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import { CreateBlog } from '@/functions/Blog/CreatingABlog'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { BlogCreate } from '@/utils/BlogCreation'
import CreateBlogFields from './CreateBlogFields'

const WriteWithAI = () => {
  const { userData } = useContext(UserContext)
  const [CreateValue, SetValue] = useState<BlogCreate>({
    Title: '',
    Image: null,
    Text: '',
  })

  const Router = useRouter()
  const PlaceHolder = {
    Title: 'Enter Blog Title',
    Text: 'Enter Description For Your Blog',
  }
  const handleSubmit = async () => {
    const GetData = await CreateBlog(
      CreateValue.Text,
      userData.Name,
      CreateValue.Title,
      userData.email,
      userData.imageUrl,
      CreateValue.Image,
      userData.Name
    )
    if (GetData) {
      toast.success('BLOG HAS BEEN CREATED')
      Router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to from-orange-800  to-gray-300">
        Create a New Blog With AI
      </h1>
      <div className="w-full space-y-6">
        <CreateBlogFields
          CreateValue={CreateValue}
          SetValue={SetValue}
          PlaceHolder={PlaceHolder}
        />
        <div className=" flex gap-2">
          {' '}
          <button
            onClick={handleSubmit}
            className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteWithAI
