import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

const fetchUserPosts = async (name: string) => {
  try {
    const response = await axios.get(`${APIURL}/api/User`, {
      params: { Name: name },
    })

    if (response.status == 200) {
      // console.log(response.data)
      return response.data
    }
  } catch (error) {
    console.error('Error fetching user posts:', error)
    return {
      status: 'error',
      message: 'Failed to fetch user posts',
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

export default fetchUserPosts
