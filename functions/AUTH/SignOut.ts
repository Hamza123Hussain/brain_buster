import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const SignOut = async () => {
  try {
    const Response = await axios.get(`${APIURL}/api/Users/Signout`)
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION', error)
  }
}
