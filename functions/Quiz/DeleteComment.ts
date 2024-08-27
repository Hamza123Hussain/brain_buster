import axios from 'axios'
export const deleteComment = async (commentId: string, quizId: string) => {
  try {
    // Send a DELETE request to the API endpoint
    const response = await axios.delete(
      'http://localhost:8000/api/AIAsk/DeleteComment',
      {
        params: { CommentID: commentId, QUIZID: quizId },
      }
    )
    if (response.status === 200) {
      // Successfully deleted
      return true
    } else {
      // Handle unexpected response status
      console.error('Unexpected response status:', response.status)
      return false
    }
  } catch (error) {
    console.error('Error deleting comment:', error)
    return false
  }
}
