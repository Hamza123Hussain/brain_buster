'use client'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'
import { CreateBlog } from '@/functions/Blog/CreatingABlog'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { CreateWithAI } from '@/functions/Blog/CallingAI'
import { BlogCreate } from '@/utils/BlogCreation'
import Loader from '@/components/Loader'
import CreateBlogFields from '@/components/Blog/CreateBlogFields'

const WriteWithAI = () => {
  const { userData, loading, setLoading } = useContext(UserContext)
  const [CreateValue, SetValue] = useState<BlogCreate>({
    Title: '',
    Image: null,
    Text: '',
  })

  const Router = useRouter()
  const PlaceHolder = {
    Title: 'Enter A Reasonable Prompt to Generate A Blog Title',
    Text: 'Enter A Reasonable Prompt to Generate A Description For Your Blog',
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

  const CallAI = async () => {
    setLoading(true)
    const Data = await CreateWithAI(CreateValue.Title, CreateValue.Text)
    if (Data) {
      SetValue((element) => ({
        ...element,
        Title: Data.Title,
        Text: Data.Description,
      }))
      setLoading(false)
    }
  }
  if (loading) {
    return <Loader />
  }
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to from-orange-800  to-gray-300">
        Create a New Blog With AI
      </h1>
      <div className="w-full space-y-6">
        <CreateBlogFields
          PlaceHolder={PlaceHolder}
          CreateValue={CreateValue}
          SetValue={SetValue}
        />
        <div className=" flex gap-2">
          {' '}
          <button
            onClick={CallAI}
            className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
          >
            Write With AI
          </button>
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
