export type ResponseBody<T> = {
  code: number
  data: T
  msg: string
}

export type BlogListType = BlogInfoType[]

export type BlogInfoType = {
  createdat: string
  name: string
  title: string
  text: string
  views: number
  tag: string[]
}

export type Token = {
  token: string
}

export type UserInfo = {
  username: string
  password: string
}

export type PostBlogInfo = {
  name: string
  title: string
  text: string
  tag: string[]
}

export type AdminInfo = {
  nickname: string
  describe: string
  'my-links': Array<{ 'site-name': string, 'site-link': string }>
}
