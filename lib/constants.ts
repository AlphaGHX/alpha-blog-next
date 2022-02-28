const DOMAIN = 'lolizzz.com'
const BACKEND_PORT = ':12900'
const WEB_PORT = ':3000'

export const DEV = {
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

export const START = {
  ROOT: 'http://localhost' + BACKEND_PORT + '/',
  LIST: 'http://localhost' + BACKEND_PORT + '/system/list',
  LIST_IMG: 'http://localhost' + BACKEND_PORT + '/system/list/img/',
  BLOG: 'http://localhost' + BACKEND_PORT + '/system/blog/',
  BLOG_INFO: 'http://localhost' + BACKEND_PORT + '/system/blog-info/',
  TAG: 'http://localhost' + BACKEND_PORT + '/system/tag/',

  VERIFY_TOKEN: 'http://' + DOMAIN + WEB_PORT + '/system/token-verify',
  VERIFY_USER: 'http://' + DOMAIN + WEB_PORT + '/system/user-verify',
  POST_BLOG_INFO: 'http://' + DOMAIN + WEB_PORT + '/system/blog/uploadinfo',
  POST_BLOG_FILE: 'http://' + DOMAIN + WEB_PORT + '/system/blog/uploadfile',
  CREATE_BLOG_INFO: 'http://' + DOMAIN + WEB_PORT + '/system/blog/createinfo',
  DEL_BLOG: 'http://' + DOMAIN + WEB_PORT + '/system/blog/del/',
}

export const REMOTE = { ...DEV }
