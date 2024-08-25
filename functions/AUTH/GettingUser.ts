import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export async function getUser(userID: string) {
  try {
    const response = await axios.get(`${APIURL}/api/GetUser/user`, {
      params: { userID },
    })

    console.log('User data:', response.data)
    return response.data
  } catch (error: any) {
    if (error.response) {
      // If the server responded with a status other than 2xx
      console.error('Error fetching user:', error.response.data.message)
      return { success: false, message: error.response.data.message }
    } else {
      // If the request was made but no response was received, or another error occurred
      console.error('Error fetching user:', error.message)
      return {
        success: false,
        message: 'An error occurred while fetching user data',
      }
    }
  }
}
