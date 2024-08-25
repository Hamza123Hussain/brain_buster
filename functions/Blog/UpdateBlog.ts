import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const UpdateBlogs = async (
  text: string,
  title: string,
  POSTID: string,
  BlogImage: File | null,
  email: string
) => {
  try {
    const formData = new FormData()
    formData.append('text', text)
    formData.append('title', title)
    formData.append('POSTID', POSTID)
    formData.append('email', email)

    if (BlogImage) {
      formData.append('BlogImage', BlogImage)
    }

    const response = await axios.put(`${APIURL}/api/Update&Delete`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (response.status === 200) {
      console.log('Post updated successfully:', response.data)
      return response.data // Return the updated blog data or a success message
    } else {
      console.error(`Unexpected status code: ${response.status}`)
      return null
    }
  } catch (error) {
    console.error('Error updating blog:', error)
    return null
  }
}
