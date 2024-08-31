import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

const updateUserProfile = async (
  Name: string,
  email: string,
  image: File | null
) => {
  try {
    // Create a FormData object to hold the form data
    const formData = new FormData()
    formData.append('newName', Name)
    formData.append('email', email)

    // Append the image file if it exists
    if (image) {
      formData.append('image', image)
    }

    // Send the form data to the backend API
    const response = await axios.put(`${APIURL}/api/User/UpdateUser`, formData)

    // Check the response and return the result
    if (response.status === 200) {
      console.log('User profile updated successfully:', response.data)
      return response.data
    } else {
      console.error('Failed to update user profile:', response.data)
      return { success: false, message: response.data.message }
    }
  } catch (error) {
    console.error('Error updating user profile:', error)
    return { success: false, message: 'Error updating user profile' }
  }
}

export default updateUserProfile
