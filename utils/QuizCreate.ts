export interface QuizCreate {
  Topic: string
  DifficultyLevel: string
  Image: File | null
  NumberOfQuestion: number
}
