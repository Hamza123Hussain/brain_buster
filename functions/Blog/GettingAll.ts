import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const GettingAllBlogs = async () => {
  const Response = await axios.get(`${APIURL}/api/Posts/GetAll`)
  try {
    if (Response.status === 200) {
      console.log('API RESPONSED ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
