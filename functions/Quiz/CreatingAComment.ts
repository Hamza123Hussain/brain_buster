import axios from 'axios'
export const NewComment = async (
  message: string,
  UserEmail: string,
  QUIZID: string,
  UserImage: string,
  UserName: string
) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/AIAsk/NewComment',
      {
        message,
        UserEmail,
        QUIZID,
        UserImage,
        UserName,
      }
    )

    if (response.status === 200) {
      //   console.log(response.data)
      // Reset form or perform any other action on success
      return response.data
    }
  } catch (err: any) {
    alert(err.response?.data?.message)
  }
}
