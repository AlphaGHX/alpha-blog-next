export type ResponseType<T> = {
  code: number
  data: T
  msg: string
}

export type BlogListType = BlogInfoType[]

export type BlogInfoType = {
  createdat: string
  updatedat: string
  name: string
  title: string
  text: string
  tag: string[]
}

export type Token = {
  token: string
}

export type UserInfo = {
  username: string
  password: string
}
