/*
ROOT:服务器IP/域名
LIST:所有博客的列表
LIST_IMG:博客对应的图片
BLOG:博客的Markdown文件
BLOG_INFO:博客的信息
TAG:根据tag获取博客内容
VERIFY_TOKEN:验证JWT Token
VERIFY_USER:验证用户名密码获取JWT Token
POST_BLOG_INFO:向后端推送博客信息
POST_BLOG_FILE:向后端更新博客文件
CREATE_BLOG_INFO:向后端创建博客文件（Img和Markdown）
DEL_BLOG:删除指定博客
GET_ADMIN_INFO:获取管理员信息
GET_ADMIN_AVATAR:获取管理员头像
*/

// 开发环境下的 URL
const DEV_URL = 'http://localhost:3000'

// 生产环境下的 URL
const START_URL = 'https://blog.lolizzz.com'
const START_BACK_URL = 'http://blog.lolizzz.com:12900'

const DEV = {
  ROOT: DEV_URL + '/api/',
  LIST: DEV_URL + '/api/system/list',
  LIST_IMG: DEV_URL + '/api/system/list/img/',
  BLOG: DEV_URL + '/api/system/blog/',
  BLOG_INFO: DEV_URL + '/api/system/blog-info/',
  TAG: DEV_URL + '/api/system/tag/',

  LIST_IMG_EX: DEV_URL + '/api/system/list/img/',
  BLOG_EX: DEV_URL + '/api/system/blog/',
  VERIFY_TOKEN: DEV_URL + '/api/system/token-verify',
  VERIFY_USER: DEV_URL + '/api/system/user-verify',
  POST_BLOG_INFO: DEV_URL + '/api/system/blog/uploadinfo',
  POST_BLOG_FILE: DEV_URL + '/api/system/blog/uploadfile',
  CREATE_BLOG_INFO: DEV_URL + '/api/system/blog/createinfo',
  DEL_BLOG: DEV_URL + '/api/system/blog/del/',
  GET_ADMIN_INFO: DEV_URL + '/api/system/get-admin-info',
  GET_ADMIN_AVATAR: DEV_URL + '/api/system/get-admin-avatar'
}

const START = {
  ROOT: START_BACK_URL + '/',
  LIST: START_BACK_URL + '/system/list',
  LIST_IMG: START_BACK_URL + '/system/list/img/',
  BLOG: START_BACK_URL + '/system/blog/',
  BLOG_INFO: START_BACK_URL + '/system/blog-info/',
  TAG: START_BACK_URL + '/system/tag/',

  LIST_IMG_EX: START_URL + '/system/list/img/',
  BLOG_EX: START_URL + '/system/blog/',
  VERIFY_TOKEN: START_URL + '/system/token-verify',
  VERIFY_USER: START_URL + '/system/user-verify',
  POST_BLOG_INFO: START_URL + '/system/blog/uploadinfo',
  POST_BLOG_FILE: START_URL + '/system/blog/uploadfile',
  CREATE_BLOG_INFO: START_URL + '/system/blog/createinfo',
  DEL_BLOG: START_URL + '/system/blog/del/',
  GET_ADMIN_INFO: START_URL + '/system/get-admin-info',
  GET_ADMIN_AVATAR: START_URL + '/system/get-admin-avatar'
}

// 分别为生产环境和开发环境更换不同远端信息
export const REMOTE =
  process.env.NODE_ENV === 'production' ? { ...START } : { ...DEV }
