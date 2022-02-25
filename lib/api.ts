import { REMOTE } from './constants'
import { UserInfo } from '../types/post'

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
