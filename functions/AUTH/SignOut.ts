import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const SignOut = async () => {
  try {
    const Response = await axios.get(`http://localhost:8000/api/Auth/`)
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION', error)
  }
}
