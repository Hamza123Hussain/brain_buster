import axios from 'axios'

export const fetchAiQuestions = async (userEmail: string) => {
  try {
    const response = await axios.get('http://localhost:8000/api/User/GetQuiz', {
      params: { UserEmail: userEmail },
    })

    if (response.status === 200) {
      // Return the AI questions data
      return response.data
    } else if (response.status === 404) {
      return false
      throw new Error('No AI questions found for the given UserEmail')
    }
  } catch (error) {
    // Handle errors during the fetch operation
    console.error('Error fetching AI questions:', error)
    throw new Error('Failed to fetch AI questions')
  }
}
