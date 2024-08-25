import React from 'react'
import { QuizCreate } from '@/utils/QuizCreate'
const CreateBlogFields = ({
  CreateValue,
  SetValue,
  PlaceHolder,
}: {
  CreateValue: QuizCreate
  SetValue: React.Dispatch<React.SetStateAction<QuizCreate>>
  PlaceHolder: any
}) => {
  const HandleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target

    SetValue((prev: QuizCreate) => ({
      ...prev,
      [name]: type === 'number' ? Math.max(3, Number(value)) : value, // Ensure number is never less than 3
    }))
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="topic" className="text-lg font-medium text-gray-700">
          Topic
        </label>
        <input
          id="topic"
          type="text"
          name="Topic"
          value={CreateValue.Topic || ''}
          onChange={HandleChange}
          placeholder={PlaceHolder.Title}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="difficulty"
          className="text-lg font-medium text-gray-700"
        >
          Select A Difficulty Level
        </label>
        <select
          name="DifficultyLevel"
          id="difficulty"
          onChange={HandleChange}
          value={CreateValue.DifficultyLevel || ''}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        >
          <option value="" disabled>
            Choose Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="NumberOfQuestion"
          className="text-lg font-medium text-gray-700"
        >
          Number of Questions
        </label>
        <input
          id="NumberOfQuestion"
          type="number"
          name="NumberOfQuestion"
          min="3"
          value={CreateValue.NumberOfQuestion} // Default to 3 if undefined
          onChange={HandleChange}
          placeholder="Enter the number of questions"
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        />
      </div>
    </>
  )
}

export default CreateBlogFields
