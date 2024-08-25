'use client'
import BlogCard from '@/components/Blog/BlogCard'
import Loader from '@/components/Loader'
import { GettingAllBlogs } from '@/functions/Blog/GettingAll'
import { BLOG } from '@/utils/BlogInterface'
import { useEffect, useState } from 'react'
import { FaRegSadTear } from 'react-icons/fa' // Importing an icon from React Icons

export default function Home() {
  const [AllBlogs, SetBlogs] = useState<BLOG[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const GetBlogs = async () => {
      setLoading(true)
      const Data = await GettingAllBlogs()
      try {
        if (Data) {
          setLoading(false)
          SetBlogs(Data)
        }
      } catch (error) {
        setLoading(false)
        console.log('FUNCTION ERROR ', error)
      }
    }
    GetBlogs()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex flex-col gap-6 p-4 mx-auto">
      {AllBlogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-500">
          <FaRegSadTear size={48} className="mb-4" />
          <p>No blogs available at the moment. Please check back later.</p>
        </div>
      ) : (
        AllBlogs.map((element) => <BlogCard key={element.id} Blog={element} />)
      )}
    </div>
  )
}
