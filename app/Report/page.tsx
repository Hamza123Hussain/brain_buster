'use client'
import { UserContext } from '@/utils/Context'
import { Questions } from '@/utils/Quiz'
import { useContext, useEffect, useState } from 'react'
const Report = () => {
  const [questions, setQuestions] = useState<Questions[]>([])
  const { score } = useContext(UserContext)
  useEffect(() => {
    // Use `window` to ensure the code runs only on the client-side
    // `window` is not available on the server, so this check makes sure the code doesn't run on the server
    if (typeof window !== 'undefined') {
      // Get the part of the URL that comes after the `?` symbol
      // For example, in `http://example.com/?questions=%5B%22What%20is%20React%3F%22%2C%22What%20is%20useEffect%3F%22%5D`, this would be `?questions=%5B%22What%20is%20React%3F%22%2C%22What%20is%20useEffect%3F%22%5D`
      const queryString = window.location.search
      // Create a URLSearchParams object to easily work with query parameters
      // This allows us to extract specific parameters from the query string
      const urlParams = new URLSearchParams(queryString)
      // Extract the value associated with the `questions` parameter from the query string
      // This value is URL-encoded
      const questionsParam = urlParams.get('questions')
      // Check if `questionsParam` is not null (i.e., the `questions` parameter exists in the URL)
      if (questionsParam) {
        // Decode the URL-encoded parameter to get the original string
        // Then parse the string as JSON to convert it back into a JavaScript array
        // `decodeURIComponent` undoes the URL encoding, and `JSON.parse` converts the JSON string into an array
        const decodedQuestions = JSON.parse(decodeURIComponent(questionsParam))
        setQuestions(decodedQuestions)
      }
    }
  }, [])
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Quiz Report Card</h2>
      {score}
      {questions.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {questions.map((question, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 border rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">
                Question {index + 1}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Question:</strong> {question.Question}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Correct Answer:</strong> {question.Correct_Answer}
              </p>
              <p className="text-gray-700">
                <strong>Explanation:</strong> {question.Explanation}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No questions available.</p>
      )}
    </div>
  )
}

export default Report
