export interface InputValues {
  email: string
  password: string
  Name: string
  Image: File | null
}
export interface UserData {
  Name: string
  UserID: string
  email: string
  imageUrl: string
}

export const APIURL = 'https://brain-buster-back-end.vercel.app'
