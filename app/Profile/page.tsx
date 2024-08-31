'use client'
import UserDetail from '@/components/Auth/UserDetails'
import Loader from '@/components/Loader'
import updateUserProfile from '@/functions/AUTH/UpdateUserDetails'
import { UserContext } from '@/utils/Context'
import { UserData } from '@/utils/SignupInterface'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
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
        imageFile
      )
      if (Data) {
        setUserData((element: UserData) => ({
          ...element,
          Name: Data.Name,
          imageUrl: Data.imageUrl ? Data.imageUrl : element.imageUrl,
        }))
        toast.success('Profile updated successfully')
        Router.push('/')
        setLoading(false)
      }
    } catch (error) {
      toast.error('Failed to update profile')
      setLoading(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-gray-700 my-5">
      <h2 className="text-3xl font-semibold text-white mb-6">Update Profile</h2>

      <UserDetail />
      {/* File Upload Field */}
      <div className="mb-4">
        <label className="block text-white font-medium mb-2" htmlFor="file">
          Upload Image
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* Display selected image */}
        {userData.imageUrl && (
          <div className="my-4">
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
          className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Update Profile
        </button>
      </div>
    </div>
  )
}

export default UpdateBlog
