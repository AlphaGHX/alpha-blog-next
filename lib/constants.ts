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

const DEVELOPMENT_REQUEST = {
  ROOT: `${process.env.BACKEND_URL}/`,
  LIST: `${process.env.BACKEND_URL}/system/list`,
  LIST_IMG: `${process.env.BACKEND_URL}/system/list/img/`,
  BLOG: `${process.env.BACKEND_URL}/system/blog/`,
  BLOG_INFO: `${process.env.BACKEND_URL}/system/blog-info/`,
  TAG: `${process.env.BACKEND_URL}/system/tag/`,

  // 使用 next.js 的 rewrites 处理跨域问题
  LIST_IMG_EX: '/api/system/list/img/',
  BLOG_EX: '/api/system/blog/',
  VERIFY_TOKEN: '/api/system/token-verify',
  VERIFY_USER: '/api/system/user-verify',
  POST_BLOG_INFO: '/api/system/blog/uploadinfo',
  POST_BLOG_FILE: '/api/system/blog/uploadfile',
  CREATE_BLOG_INFO: '/api/system/blog/createinfo',
  DEL_BLOG: '/api/system/blog/del/',
  GET_ADMIN_INFO: '/api/system/get-admin-info',
  GET_ADMIN_AVATAR: '/api/system/get-admin-avatar'
}

const PRODUCTION_REQUEST = {
  ROOT: `${process.env.BACKEND_URL}/`,
  LIST: `${process.env.BACKEND_URL}/system/list`,
  LIST_IMG: `${process.env.BACKEND_URL}/system/list/img/`,
  BLOG: `${process.env.BACKEND_URL}/system/blog/`,
  BLOG_INFO: `${process.env.BACKEND_URL}/system/blog-info/`,
  TAG: `${process.env.BACKEND_URL}/system/tag/`,

  // 使用 nginx 的反向代理处理跨域问题
  LIST_IMG_EX: '/system/list/img/',
  BLOG_EX: '/system/blog/',
  VERIFY_TOKEN: '/system/token-verify',
  VERIFY_USER: '/system/user-verify',
  POST_BLOG_INFO: '/system/blog/uploadinfo',
  POST_BLOG_FILE: '/system/blog/uploadfile',
  CREATE_BLOG_INFO: '/system/blog/createinfo',
  DEL_BLOG: '/system/blog/del/',
  GET_ADMIN_INFO: '/system/get-admin-info',
  GET_ADMIN_AVATAR: '/system/get-admin-avatar'
}

// 分别为生产环境和开发环境更换不同远端信息
export const REMOTE =
  process.env.NODE_ENV === 'production' ? { ...PRODUCTION_REQUEST } : { ...DEVELOPMENT_REQUEST }
