import { BlogCreate } from '@/utils/BlogCreation'
import React from 'react'
import FileField from '../Auth/FileField'

const CreateBlogFields = ({
  CreateValue,
  SetValue,
  PlaceHolder,
}: {
  CreateValue: BlogCreate
  SetValue: React.Dispatch<React.SetStateAction<BlogCreate>>
  PlaceHolder: any
}) => {
  const HandleChange = (e: any) => {
    if (e.target.type === 'file') {
      SetValue((prev: BlogCreate) => ({
        ...prev,
        Image: e.target?.files[0],
      }))
    } else {
      SetValue((prev: BlogCreate) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-lg font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="Title"
          value={CreateValue.Title || ''} // Ensure value is not undefined
          onChange={HandleChange}
          placeholder={PlaceHolder.Title}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="text" className="text-lg font-medium text-gray-700">
          Text
        </label>
        <textarea
          name="Text"
          id="text"
          rows={6}
          onChange={HandleChange}
          value={CreateValue.Text || ''} // Ensure value is not undefined
          placeholder={PlaceHolder.Text}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        />
      </div>
      <FileField onChange={HandleChange} Text="Add A Picture In Your Blog" />
    </>
  )
}

export default CreateBlogFields
