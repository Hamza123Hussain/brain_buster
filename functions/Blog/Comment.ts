import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const Addcomment = async (
  message: string,
  UserID: string,
  POSTID: string
) => {
  const Response = await axios.post(`${APIURL}/api/Comments`, {
    message,
    UserID,
    POSTID,
  })
  try {
    if (Response.status === 200) {
      console.log('API RESPONSED ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
export const RemoveComment = async (POSTID: string, CommentID: string) => {
  try {
    const response = await axios.post(`${APIURL}/api/Comments/delete`, {
      POSTID,
      CommentID,
    })

    if (response.status === 200) {
      console.log('API RESPONSE', response.data)
      return response.data
    } else {
      console.error('Failed to delete comment', response.status, response.data)
      return { success: false, message: 'Failed to delete comment' }
    }
  } catch (error) {
    console.error('FUNCTION ERROR', error)
    return { success: false, message: 'Internal server error' }
  }
}
