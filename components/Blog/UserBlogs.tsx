import React, { useContext, useEffect, useState } from 'react'
import fetchUserPosts from '@/functions/Blog/GettingUserBlogs'
import { BLOG } from '@/utils/BlogInterface'
import { UserContext } from '@/utils/Context'
import UserBlogCard from './UserBlogCard'
import Loader from '../Loader'
import { useRouter } from 'next/navigation'
import { FaRegFrown } from 'react-icons/fa' // Import React Icon

const UserBlogs = () => {
  const { userData, setLoading, loading } = useContext(UserContext)
  const [UserBlogs, setBlogs] = useState<BLOG[]>([])
  const Router = useRouter()
  console.log(userData.Name)
  useEffect(() => {
    const GetUserBlogs = async () => {
      setLoading(true)
      const Data = await fetchUserPosts(userData.Name)
      console.log(Data)
      if (Data) {
        setBlogs(Data)
        setLoading(false)
      }
    }
    GetUserBlogs()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex flex-col p-4 mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 my-5">
        <button
          onClick={() => Router.push('/Blog/Create')}
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Create A New Blog
        </button>
        <button
          onClick={() => Router.push('/Blog/AI')}
          className="bg-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          Write Blog With AI
        </button>
      </div>
      {UserBlogs.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {UserBlogs.map((element) => (
            <UserBlogCard key={element.PostID} Blog={element} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col  items-center mt-20  ">
          <FaRegFrown size={100} className="text-4xl text-gray-500 mb-4" />
          <p className="text-center text-lg md:text-4xl text-gray-500">
            No blogs created yet.
          </p>
        </div>
      )}
    </div>
  )
}

export default UserBlogs
