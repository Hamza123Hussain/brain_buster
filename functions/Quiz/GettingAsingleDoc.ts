import axios from 'axios'
// Function to fetch a document by ID
export const fetchDocumentByID = async (ID: string) => {
  try {
    if (!ID) {
      throw new Error('ID is required to fetch the document.')
    }
    // Make a GET request to the API endpoint with the ID as a query parameter
    const response = await axios.get('http://localhost:8000/api/AIAsk/GetDoc', {
      params: {
        ID,
      },
    })
    // Check if the response status is OK
    if (response.status === 200) {
      // Handle the document data returned from the API
      console.log('Document data:', response.data)
      return response.data // Return document data for further processing
    } else {
      console.error('No document found for the provided ID')
      return null // Return null if no document is found
    }
  } catch (error: any) {
    // Handle any errors that occur during the API call
    console.error('Error fetching document:', error.message)
    throw error // Rethrow the error to handle it in the calling function
  }
}
