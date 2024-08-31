import { APIURL, UserData } from '@/utils/SignupInterface'
import axios from 'axios'
import { showCustomToast } from '../CustomToast'
import toast from 'react-hot-toast'

export const LoginUser = async (Inputvalue: any): Promise<UserData | void> => {
  const { email, password } = Inputvalue

  try {
    const Response = await axios.post<UserData>(`${APIURL}/api/Auth/Login`, {
      email,
      password,
    })

    if (Response.status === 200) {
      // API responded successfully with user data
      return Response.data
    }
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 401) {
        toast.error('Incorrect email or password entered')
      } else if (error.response.status === 500) {
        // alert('Incorrect Email or Password Entered.')
        console.error('Server error:', error.response.data)
      } else {
        alert('An unexpected error occurred. Please try again later.')
        console.error('Unexpected error:', error.response.data)
      }
    }
  }
}
