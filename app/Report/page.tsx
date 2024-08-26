'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Report = () => {
  const [questions, setQuestions] = useState<any[]>([])

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
        // Update the component's state with the decoded array of questions
        // This will trigger a re-render with the new data
        setQuestions(decodedQuestions)
      }
    }
  }, []) // The empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      {/* Render the questions here */}
      {questions.map((question, index) => (
        <div key={index}>
          {/* Display question details */}
          <p>{question.Question}</p>
          <ul>
            {question.Options.map((option: string, idx: number) => (
              <li key={idx}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Report
