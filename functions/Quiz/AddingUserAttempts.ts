import axios from 'axios'

export const submitUserAttempt = async (
  UserEmail: string,
  QuizID: string | undefined,
  Score: number
) => {
  try {
    // Send a POST request to the backend
    const response = await axios.post(
      'http://localhost:8000/api/User/UserAttempts',
      {
        UserEmail,
        QuizID,
        Score,
      }
    )

    // Check if the response is successful
    if (response.status === 200) {
      //   console.log('User attempt submitted successfully:', response.data)
      return response.data
    } else {
      console.error('Failed to submit user attempt:', response.data)
      throw new Error('Failed to submit user attempt')
    }
  } catch (error) {
    console.error('Error submitting user attempt:', error)
    throw error
  }
}
