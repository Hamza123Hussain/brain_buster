export interface UserAttempt {
  AttemptID: string
  AttemptedBy: string
  QuizData: QuizData
  UserData: UserData
  Score: number
}
interface QuizData {
  CreatedBy: string
  Difficulty: string
  ID: string
  NumberOfQuestions: number
  Topic: string
}

interface UserData {
  Name: string
  UserID: string
  email: string
  imageUrl: string
}
