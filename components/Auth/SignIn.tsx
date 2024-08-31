'use client'
import { LoginUser } from '@/functions/AUTH/LoginUser'
import { UserContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const SignIn = () => {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })
  const Router = useRouter()
  const { setUserData } = useContext(UserContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const HandleLogin = async () => {
    const Data = await LoginUser(inputVal)
    if (Data) {
      setUserData(Data)
      console.log('USER DATA ', Data)
      Router.push('/')
    }
  }

  return (
    <div className="flex flex-col bg-gradient-to-t from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl sm:p-8">
      <h2 className="text-2xl text-center text-white mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
        Sign In
      </h2>

      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-4 p-2 w-full text-xs rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />

      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-4 p-2 w-full text-xs rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />

      <button
        onClick={HandleLogin}
        className="bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold px-6 py-2 transition-all w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-xs"
      >
        Sign In
      </button>

      <div
        className="flex justify-end text-white mt-2 hover:text-purple-300 cursor-pointer"
        onClick={() => Router.push('/Forgotpass')}
      >
        <span className="text-[8px] text-purple-500">
          Forgot Your Password?
        </span>
      </div>

      <h6 className="text-xs mt-6 text-white text-center">
        Don’t Have An Account?{' '}
        <span
          onClick={() => Router.push('/Signup')}
          className="underline cursor-pointer text-purple-400 hover:text-purple-600"
        >
          Sign Up
        </span>
      </h6>
    </div>
  )
}

export default SignIn
