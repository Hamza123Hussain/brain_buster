export interface Quiz {
  CorrectAnswer: string
  Explanation: string
  Options: string[]
  Questions: Questions[]
  Topic: string
  NumberOfQuestions: number
  Difficulty: string
  ID: string
  CreatedBy: String
}
// export interface CommentData {
//   CommentID: string
//   CreatedAt: number
//   Text: string
//   UserID: string
//   UserName: string
// }

export interface Questions {
  Explanation: string
  Correct_Answer: string
  Options: any[]
  Question: string
}
