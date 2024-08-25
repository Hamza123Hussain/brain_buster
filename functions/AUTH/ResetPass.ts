import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const ResetPass = async (email: string) => {
  const Response = await axios.post(`${APIURL}/api/ResetPass/`, { email })
  try {
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log('ERROR IN FUNCTION : ', error)
  }
}
