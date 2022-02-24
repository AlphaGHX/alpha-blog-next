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
    const userInfo: UserInfo = {
      username: username.current?.value || '',
      password: password.current?.value || '',
    }
    verifyUser(userInfo).then((res: ResponseType<Token>) => {
      if (res.code === 0) {
        localStorage.token = res.data.token
        loginSuccess()
      } else {
        alert("登录失败,账号或密码错误.")
      }
    })
  }

  return (
    <>
      <div
        className="w-96 mx-auto text-main-text dark:text-main-text-dark
                  shadow-main-base shadow-main-shadow dark:shadow-main-shadow-dark
                  rounded-3xl overflow-hidden"
      >
        <div className="m-5">
          <div className="text-3xl font-bold mb-5 ml-3">登录</div>
          <form
            onSubmit={(e) => {
              handleSubmit()
              e.preventDefault()
            }}
          >
            <div>
              <label htmlFor="username">用户名</label>
              <input name="username" ref={username} type="text" />
            </div>
            <div>
              <label htmlFor="password">密码</label>
              <input name="password" ref={password} type="password" />
            </div>
            <input type="submit" value="登录" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
