import { REMOTE } from './constants'

export const getAllPost = async () => {
  try {
    let response = await fetch(REMOTE)
    return await response.json()
  } catch (error) {
    console.log('Request Failed', error)
  }
}
