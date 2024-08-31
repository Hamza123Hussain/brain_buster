import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const fetchAiQuestions = async (
  Topic: string,
  NumberOfQuestions: number,
  UserEmail: string,
  Difficulty: string,
  UserName: string
) => {
  try {
    // Make a POST request to the API endpoint
    const response = await axios.post(`${APIURL}/api/AIAsk/`, {
      Topic,
      NumberOfQuestions,
      UserEmail,
      Difficulty,
      UserName,
    })

    // Check if the response is successful
    if (response.status === 200) {
      // Return the list of questions
      return response.data
    } else {
      // Handle any non-200 responses
      console.error('Failed to fetch AI questions:', response.data)
      return null
    }
  } catch (error) {
    // Handle errors during the request
    console.error('Error fetching AI questions:', error)
    return null
  }
}
