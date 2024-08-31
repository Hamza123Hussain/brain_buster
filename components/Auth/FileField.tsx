import React from 'react'

const FileField = ({
  onChange,
  Text,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  Text: string
}) => {
  return (
    <div className="bg-transparent border-2 border-[#BDBDBD] p-4 rounded-lg">
      <label
        htmlFor="profile-image"
        className="block text-[#F2F2F2] text-sm sm:text-base md:text-lg font-semibold mb-2"
      >
        {Text}
      </label>
      <input
        id="profile-image"
        type="file"
        name="Image"
        onChange={onChange}
        accept=".jpg,.jpeg,.png,.webp" // Restrict file types
        className="block w-full text-xs sm:text-sm text-[#BDBDBD] file:cursor-pointer file:bg-[#009688] file:text-white file:py-2 file:px-4 file:rounded-lg file:border-0 hover:file:bg-[#00796B] transition-colors duration-300"
      />
    </div>
  )
}

export default FileField
