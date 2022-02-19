export type PostList = {
  list: PostType[]
}

export type PostType = {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: string
  Name: string
  Title: string
  Text: string
}
