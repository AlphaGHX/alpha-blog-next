export type ResponseType<T> = {
  code: number
  data: T
  msg: string
}

export type BlogListType = BlogInfoType[]

export type BlogInfoType = {
  createdat: string
  updatedat: string
  deletedat: string
  name: string
  title: string
  text: string
  tag: string[]
}
