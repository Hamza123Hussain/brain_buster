import axios from 'axios'
import { useState, useEffect } from 'react'

// Function to fetch quiz attempts
export const fetchQuizAttempts = async (UserEmail: string) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/User/GettingAttempts`,
      {
        params: {
          UserEmail,
        },
      }
    )

    if (response.status == 200) {
      //   console.log('DATA OF USER ', response.data)
      return response.data
    }
    throw new Error('Failed to fetch quiz attempts')
  } catch (error) {
    console.error('Error fetching quiz attempts:', error)
    throw error
  }
}
