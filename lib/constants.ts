//域名绑定
const DOMAIN = 'blog.lolizzz.com'
//后端端口绑定
const BACKEND_PORT = ':12900'
//前端端口绑定
const WEB_PORT = ':3000'
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
*/
const DEV = {
  ROOT: 'http://localhost' + WEB_PORT + '/api/',
  LIST: 'http://localhost' + WEB_PORT + '/api/system/list',
  LIST_IMG: 'http://localhost' + WEB_PORT + '/api/system/list/img/',
  BLOG: 'http://localhost' + WEB_PORT + '/api/system/blog/',
  BLOG_INFO: 'http://localhost' + WEB_PORT + '/api/system/blog-info/',
  TAG: 'http://localhost' + WEB_PORT + '/api/system/tag/',

  VERIFY_TOKEN: 'http://localhost' + WEB_PORT + '/api/system/token-verify',
  VERIFY_USER: 'http://localhost' + WEB_PORT + '/api/system/user-verify',
  POST_BLOG_INFO: 'http://localhost' + WEB_PORT + '/api/system/blog/uploadinfo',
  POST_BLOG_FILE: 'http://localhost' + WEB_PORT + '/api/system/blog/uploadfile',
  CREATE_BLOG_INFO:
    'http://localhost' + WEB_PORT + '/api/system/blog/createinfo',
  DEL_BLOG: 'http://localhost' + WEB_PORT + '/api/system/blog/del/',
}

const START = {
  ROOT: 'http://localhost' + BACKEND_PORT + '/',
  LIST: 'http://localhost' + BACKEND_PORT + '/system/list',
  LIST_IMG: 'http://localhost' + BACKEND_PORT + '/system/list/img/',
  BLOG: 'http://localhost' + BACKEND_PORT + '/system/blog/',
  BLOG_INFO: 'http://localhost' + BACKEND_PORT + '/system/blog-info/',
  TAG: 'http://localhost' + BACKEND_PORT + '/system/tag/',

  VERIFY_TOKEN: 'https://' + DOMAIN + '/system/token-verify',
  VERIFY_USER: 'https://' + DOMAIN + '/system/user-verify',
  POST_BLOG_INFO: 'https://' + DOMAIN + '/system/blog/uploadinfo',
  POST_BLOG_FILE: 'https://' + DOMAIN + '/system/blog/uploadfile',
  CREATE_BLOG_INFO: 'https://' + DOMAIN + '/system/blog/createinfo',
  DEL_BLOG: 'https://' + DOMAIN + '/system/blog/del/',
}

// 分别为生产环境和开发环境更换不同远端信息
export const REMOTE =
  process.env.NODE_ENV === 'production' ? { ...START } : { ...DEV }
