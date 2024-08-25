import { UserContext } from '@/utils/Context'
import React, { useContext } from 'react'
const UserDetail = () => {
  const { userData, setUserData } = useContext(UserContext)
  return (
    <>
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={userData.Name}
          onChange={(e) => setUserData({ ...userData, Name: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBg"
        />
      </div>

      {/* Image URL Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="imageUrl"
        >
          Image URL
        </label>
        <input
          type="text"
          disabled
          id="imageUrl"
          value={userData.imageUrl}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBg"
        />
      </div>
    </>
  )
}

export default UserDetail
