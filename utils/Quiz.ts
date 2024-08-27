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
  comments: CommentData[]
}
export interface CommentData {
  CommentID: string
  CreatedAt: number
  Text: string
  UserName: string
  UserEmail: string
  UserImage: string
}

export interface Questions {
  Explanation: string
  Correct_Answer: string
  Options: any[]
  Question: string
}
