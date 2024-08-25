export interface BLOG {
  CreatedAt: any
  CreatedBy: string
  PostID: string
  Text: string
  Title: string
  comments: CommentData[]
  id: string
  UserName: string
  UserImage: string
  BlogImageURL: string
}
export interface CommentData {
  CommentID: string
  CreatedAt: number
  Text: string
  UserID: string
  UserName: string
}
