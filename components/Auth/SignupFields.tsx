import { InputValues } from '@/utils/SignupInterface'
import React, { ChangeEvent, useContext } from 'react'
import FileField from './FileField'
import { UserContext } from '@/utils/Context'

const SignUpTextFields = () => {
  const { inputVal, setInputVal } = useContext(UserContext)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') {
      setInputVal((prev: any) => ({
        ...prev,
        Image: e.target.files?.[0],
      }))
    } else {
      setInputVal((prev: InputValues) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
    console.log('INPUIT VALUES', inputVal)
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        name="Name"
        value={inputVal.Name}
        onChange={handleChange}
        className="mb-3 p-3 rounded-lg bg-slate-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-3 p-3 rounded-lg bg-slate-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-3 p-3 rounded-lg bg-slate-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <FileField onChange={handleChange} Text="Add A Profile Image" />
    </>
  )
}

export default SignUpTextFields
