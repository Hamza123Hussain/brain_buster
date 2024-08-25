import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const RemoveBlog = async (POSTID: string) => {
  try {
    const response = await axios.delete(`${APIURL}/api/Update&Delete/${POSTID}`)

    if (response.status === 200) {
      return response.data
    } else {
      console.error('Error response status:', response.status)
      return null
    }
  } catch (error) {
    console.error('Error in RemoveBlog function:', error)
    return null
  }
}
