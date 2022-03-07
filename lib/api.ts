import { REMOTE } from './constants'
import { UserInfo } from '../types/post'
import { PostBlogInfo, ResponseType } from '../types/post'

const retError = (error: any): any => {
  return {
    code: -2,
    data: { ...error },
    msg: '请求错误',
  }
}

export const getBlogList = async () => {
  try {
    let response = await fetch(REMOTE.LIST)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const getBlog = async (slug: string) => {
  try {
    let response = await fetch(REMOTE.BLOG + slug)
    return await response.text()
  } catch (error) {
    return retError(error)
  }
}

export const getBlogInfo = async (slug: string) => {
  try {
    let response = await fetch(REMOTE.BLOG_INFO + slug)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const getBlogUseTag = async (slug: string) => {
  try {
    let response = await fetch(REMOTE.TAG + slug)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const verifyToken = async (token: string) => {
  var myHeaders = new Headers()
  myHeaders.append('x-token', token)

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  }

  try {
    let response = await fetch(REMOTE.VERIFY_TOKEN, requestOptions)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const verifyUser = async (userInfo: UserInfo) => {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify({
    username: userInfo.username,
    password: userInfo.password,
  })

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  try {
    let response = await fetch(REMOTE.VERIFY_USER, requestOptions)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const verifyLocalToken = async () => {
  if (localStorage.token) {
    let res: ResponseType<object> = await verifyToken(localStorage.token)
    if (res && res.code === 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export const postBlogInfo = async (token: string, data: PostBlogInfo) => {
  var myHeaders = new Headers()
  myHeaders.append('x-token', token)
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify({
    name: data.name,
    title: data.title,
    text: data.text,
    tag: data.tag,
  })

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  try {
    let response = await fetch(REMOTE.POST_BLOG_INFO, requestOptions)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const createBlogInfo = async (token: string, data: PostBlogInfo) => {
  var myHeaders = new Headers()
  myHeaders.append('x-token', token)
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify({
    name: data.name,
    title: data.title,
    text: data.text,
    tag: data.tag,
  })

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  try {
    let response = await fetch(REMOTE.CREATE_BLOG_INFO, requestOptions)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const postBlogFile = async (
  token: string,
  topImg: File,
  markdown: File,
  name: string
) => {
  var myHeaders = new Headers()
  myHeaders.append('x-token', token)

  var formdata = new FormData()
  formdata.append('markdown', markdown)
  formdata.append('topImg', topImg)
  formdata.append('name', name)

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  }

  try {
    let response = await fetch(REMOTE.POST_BLOG_FILE, requestOptions)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const delBlog = async (token: string, name: string) => {
  var myHeaders = new Headers()
  myHeaders.append('x-token', token)

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  }

  try {
    let response = await fetch(REMOTE.DEL_BLOG + name, requestOptions)
    return await response.json()
  } catch (error) {
    return retError(error)
  }
}

export const getGitHubUserInfo = async (username: string) => {
  var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  }

  try {
    let response = await fetch(
      'https://api.github.com/users/' + username,
      requestOptions
    )
    const data = await response.json()
    return { code: 0, data, msg: 'Ok' }
  } catch (error) {
    return retError(error)
  }
}
