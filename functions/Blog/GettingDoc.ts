import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const GETDoc = async (ID: String) => {
  const Response = await axios.get(`${APIURL}/Api/Get?ID=${ID}`)
  try {
    if (Response.status === 200) {
      console.log('API RESPONSED ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.log('FUNCTION ERROR', error)
  }
}
