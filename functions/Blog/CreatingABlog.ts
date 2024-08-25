import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateBlog = async (
  text: string,
  Name: string,
  title: string,
  email: string,
  UserImage: string,
  BlogImage: File | null,
  UserName: string
) => {
  try {
    const formdata = new FormData()
    formdata.append('text', text)
    formdata.append('Name', Name)
    formdata.append('title', title)
    formdata.append('email', email)
    formdata.append('UserImage', UserImage)
    if (BlogImage) {
      formdata.append('BlogImage', BlogImage)
    }
    formdata.append('UserName', UserName)

    const Response = await axios.post(`${APIURL}/api/Posts`, formdata)

    if (Response.status === 201) {
      console.log('FORM DATA ', formdata)
      return Response.data
    } else {
      console.error(`Unexpected status code: ${Response.status}`)
      return null
    }
  } catch (error) {
    console.error('Error creating blog:', error)
    return null
  }
}
