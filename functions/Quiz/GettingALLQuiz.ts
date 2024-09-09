import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'
import toast from 'react-hot-toast'

// Function to fetch all AI questions
export const fetchAllAiQuiz = async () => {
  try {
    // Check if UserID is provided

    // Make a GET request to your backend API
    const response = await axios.get(`${APIURL}/api/AIAsk/GetAll`)

    // Check if the response is successful
    if (response.status === 200) {
      // Successfully fetched data
      return response.data
    } else {
      // Handle unexpected status codes
      toast.error('Failed to fetch AI questions. Please try again.')
      return null
    }
  } catch (error) {
    // Log error and show toast notification
    console.error('Error fetching AI questions:', error)
    toast.error(
      'An error occurred while fetching AI questions. Please try again.'
    )
    return null
  }
}
