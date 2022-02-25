import { useRef } from 'react'
import { UserInfo, ResponseType, Token } from '../types/post'
import { verifyUser } from '../lib/api'

type Props = {
  loginSuccess: () => void
}

const Login = ({ loginSuccess }: Props) => {
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (username.current?.value === '' || password.current?.value === '') {
      alert('请勿留空')
      return
    }
    const userInfo: UserInfo = {
      username: username.current?.value || '',
      password: password.current?.value || '',
    }
    verifyUser(userInfo).then((res: ResponseType<Token>) => {
      if (res.code === 0) {
        localStorage.token = res.data.token
        loginSuccess()
      } else {
        alert('登录失败,账号或密码错误.')
      }
    })
  }

  return (
    <>
      <div
        className="w-11/12 sm:w-2/3 md:w-96 mx-auto text-main-text
                dark:text-main-text-dark shadow-base
                  rounded-3xl overflow-hidden"
      >
        <div className="m-5">
          <div className="text-3xl font-bold my-10">登录</div>
          <form
            onSubmit={(e) => {
              handleSubmit()
              e.preventDefault()
            }}
          >
            <div>
              <input
                className="input-base mb-5"
                name="username"
                ref={username}
                type="text"
                placeholder="用户名"
              />
            </div>
            <div>
              <input
                className="input-base mb-10"
                name="password"
                ref={password}
                type="password"
                placeholder="密码"
              />
            </div>
            <input className="input-bnt" type="submit" value="登录" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
