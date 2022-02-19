import { REMOTE } from './constants'

export const getBlogList = async () => {
  try {
    let response = await fetch(REMOTE.LIST)
    return await response.json()
  } catch (error) {
    console.log('Request Failed', error)
  }
}

export const getBlog = async (slug: string) => {
  try {
    let response = await fetch(REMOTE.BLOG + slug)
    return await response.text()
  } catch (error) {
    console.log('Request Failed', error)
  }
}

export const getBlogInfo = async (slug: string) => {
  try {
    let response = await fetch(REMOTE.BLOG_INFO + slug)
    return await response.json()
  } catch (error) {
    console.log('Request Failed', error)
  }
}
