'use client'
import CreateBlogFields from '@/components/Blog/CreateBlogFields'
import Loader from '@/components/Loader'
import { CreateWithAI } from '@/functions/Blog/CallingAI'
import { GETDoc } from '@/functions/Blog/GettingDoc'
import { UpdateBlogs } from '@/functions/Blog/UpdateBlog'
import { BlogCreate } from '@/utils/BlogCreation'
import { UserContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const UpdateBlog = ({ params }: { params: any }) => {
  const { loading, setLoading, userData } = useContext(UserContext)
  const [CreateValue, SetValue] = useState<BlogCreate>({
    Title: '',
    Image: null,
    Text: '',
  })
  const Router = useRouter()

  const handleSubmit = async () => {
    const Data = await UpdateBlogs(
      CreateValue.Text,
      CreateValue.Title,
      params.ID,
      CreateValue.Image,
      userData.email
    )
    if (Data) {
      toast.success('BLOG UPDATED')
      Router.push('/dashboard')
    }
  }
  const gETDATA = async () => {
    setLoading(true)
    const Data = await GETDoc(params.ID)
    if (Data) {
      console.log('API RESPONBDED ', Data)
      SetValue((prev: any) => ({ ...prev, Title: Data.Title, Text: Data.Text }))
      setLoading(false)
    }
  }
  const CallAI = async () => {
    setLoading(true)
    const Data = await CreateWithAI(CreateValue.Title, CreateValue.Text)
    if (Data) {
      SetValue((element) => ({
        ...element,
        Title: Data.Title,
        Text: Data.Text,
        Image: Data.BlogImageURL ? Data.BlogImageURL : element.Image, // Corrected line
      }))
      setLoading(false)
    }
  }
  useEffect(() => {
    gETDATA()
  }, [])
  if (loading) {
    return <Loader />
  }
  const PlaceHolder = {
    Title:
      'Write A Title Here. If You want AI to generate a title then give it a reasonable prompt.',
    Text: 'Write A Descritpion Here. If You want AI to generate a description then give it a reasonable prompt',
  }
  return (
    <div className="w-full  bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Update Blog</h2>
      <CreateBlogFields
        PlaceHolder={PlaceHolder}
        CreateValue={CreateValue}
        SetValue={SetValue}
      />
      <div className=" flex gap-2 items-center mt-4">
        {' '}
        <button
          onClick={CallAI}
          className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-customBg"
        >
          Write With AI
        </button>
        <button
          onClick={handleSubmit}
          className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-customBg"
        >
          Update Blog
        </button>{' '}
      </div>
    </div>
  )
}

export default UpdateBlog
