import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'
export const deletequiz = async (UserID: string, RandomID: string) => {
  try {
    const response = await axios.delete(`${APIURL}/api/User/DeleteQuiz`, {
      params: {
        UserID,
        RandomID,
      },
    })
    if (response.status === 200) {
      return true
    } else {
      console.error('Failed to delete document', response.data)
    }
  } catch (error) {
    console.error('Error deleting document:', error)
  }
}
