import React from 'react'

const FileField = ({
  onChange,
  Text,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  Text: string
}) => {
  return (
    <div className="bg-transparent   shadow-black border-2 p-4 rounded-lg ">
      <label
        htmlFor="profile-image"
        className="block text-gray-100 text-lg font-semibold mb-2"
      >
        {Text}
      </label>
      <input
        id="profile-image"
        type="file"
        name="Image"
        onChange={onChange}
        accept=".jpg,.jpeg,.png,.webp" // Restrict file types
        className="block w-full text-sm text-gray-500 file:cursor-pointer file:bg-blue-500 file:text-white file:py-2 file:px-4 file:rounded-lg file:border-0 hover:file:bg-blue-600"
      />
    </div>
  )
}

export default FileField
