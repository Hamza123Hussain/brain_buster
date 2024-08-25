import axios from 'axios'
export const deletequiz = async (UserID: string, RandomID: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/User/DeleteQuiz`,
      {
        params: {
          UserID,
          RandomID,
        },
      }
    )
    if (response.status === 200) {
      return true
    } else {
      console.error('Failed to delete document', response.data)
    }
  } catch (error) {
    console.error('Error deleting document:', error)
  }
}
