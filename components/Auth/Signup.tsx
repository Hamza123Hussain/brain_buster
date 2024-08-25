'use client'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import SignUpTextFields from './SignupFields'
import { UserContext } from '@/utils/Context'
import Loader from '../Loader'
import { RegisterUser } from '@/functions/AUTH/RegisterUser'
const SignUp = () => {
  const Router = useRouter()
  const { inputVal, setInputVal, loading, setLoading, setUserData } =
    useContext(UserContext)
  const HandleSignup = async () => {
    setLoading(true)
    const Data = await RegisterUser(inputVal)
    // console.log('THE REGISTER API HAS RESPONDED', Data)
    if (Data) {
      setUserData(Data)
      setInputVal({
        email: '',
        password: '',
        Name: '',
        Image: null,
      })
      setLoading(false)
      Router.push('/')
    }
  }
  if (loading) return <Loader />

  return (
    <div className="flex flex-col bg-gradient-to-t from-blue-200 to-[#BFD8FE] p-6 rounded-lg shadow-lg mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl sm:p-8 ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-center text-black mb-6 ">
        Sign Up
      </h2>
      <SignUpTextFields />
      <button
        onClick={HandleSignup}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 mt-4 text-xs w-[10vw] mx-auto"
      >
        Sign Up
      </button>
      <h6 className="text-xs text-center text-gray-400 mt-4">
        Already Have An Account? Click Here To{' '}
        <span
          onClick={() => Router.push('/Login')}
          className="underline cursor-pointer text-blue-400 hover:text-blue-500 transition-all duration-300"
        >
          Log In
        </span>
      </h6>
    </div>
  )
}

export default SignUp
