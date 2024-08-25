'use client'
import UserDetail from '@/components/Auth/UserDetails'
import Loader from '@/components/Loader'
import updateUserProfile from '@/functions/AUTH/UpdateUserDetails'
import { UserContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
const UpdateBlog = () => {
  const { loading, setLoading, userData, setUserData } = useContext(UserContext)
  const Router = useRouter()
  const [imageFile, setImageFile] = useState<File | null>(null)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }
  const handleUpdateProfile = async () => {
    setLoading(true)
    try {
      const Data = await updateUserProfile(
        userData.Name,
        userData.email,
        userData.userID,
        imageFile
      )
      //   console.log('API RESPONDED', Data)
      if (Data) {
        setUserData((element: any) => ({
          ...element,
          Name: Data.Name,
          imageUrl: Data.imageUrl ? Data.imageUrl : element.imageUrl,
        }))
        setLoading(false)
      }
    } catch (error) {}
  }
  if (loading) {
    return <Loader />
  }
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg hover:shadow-lg shadow-slate-800 my-5 border-2">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Update User</h2>

      <UserDetail />
      {/* File Upload Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="file">
          Upload Image
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBg"
        />
        {/* Display selected image */}
        {userData.imageUrl && (
          <div className="mb-4">
            <img
              src={userData.imageUrl}
              alt={userData.Name}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>
      {/* Update Profile Button */}
      <div className="flex gap-2 items-center mt-4">
        <button
          onClick={handleUpdateProfile}
          className="w-full bg-customBg text-white py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-customBg"
        >
          Update Profile
        </button>
      </div>
    </div>
  )
}

export default UpdateBlog
