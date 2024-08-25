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
    <div className="flex flex-col bg-gradient-to-t from-blue-200 to-[#BFD8FE] p-6 rounded-lg shadow-lg mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl sm:p-8">
      {/* Heading */}
      <h2 className="text-2xl text-center text-black mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
        Sign In
      </h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-4 p-2 w-full text-xs rounded-xl bg-slate-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-4 p-2 w-full text-xs rounded-xl bg-slate-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      />

      {/* Sign In Button */}
      <button
        onClick={HandleLogin}
        className="bg-white hover:bg-blue-400 rounded-xl text-black hover:text-white font-semibold px-6 py-2 transition-all w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-xs"
      >
        Sign In
      </button>

      {/* Forgot Password */}
      <div
        className="flex justify-end text-white mt-2 hover:text-blue-900 cursor-pointer"
        onClick={() => Router.push('/Forgotpass')}
      >
        <span className="text-[8px] text-blue-600  ">
          Forgot Your Password?
        </span>
      </div>

      {/* Sign Up Link */}
      <h6 className="text-xs mt-6 text-black text-center">
        Don’t Have An Account?{' '}
        <span
          onClick={() => Router.push('/Signup')}
          className="underline cursor-pointer text-blue-600 hover:text-blue-800"
        >
          Sign Up
        </span>
      </h6>
    </div>
  )
}

export default SignIn
