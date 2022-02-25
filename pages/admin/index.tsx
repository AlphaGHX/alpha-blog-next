import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Container from '../../components/container'
import Login from '../../components/login'
import { getBlogList, verifyToken } from '../../lib/api'
import { ResponseType } from '../../types/post'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const AdminPage = () => {
  const [verifying, setVerifying] = useState(true)
  const [verifyok, setVerifyok] = useState(false)

  const verifyLogin = async (): Promise<boolean> => {
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

  const loginSuccess = () => {
    setVerifyok(true)
  }

  useEffect(() => {
    verifyLogin().then((resolve) => {
      setVerifying(false)
      if (resolve === true) {
        setVerifyok(true)
        return getBlogList()
      } else {
        setVerifyok(false)
      }
    })
  }, [])

  return (
    <>
      <Layout>
        <Head>
          <title>Admin</title>
        </Head>
        <Intro />
        <Container>
          {!verifying && !verifyok && <Login loginSuccess={loginSuccess} />}
          {!verifying && verifyok && <div>登录成功</div>}
          {/* {!verifying && pagestat && <BlogListEx />} */}
          {verifying && <div>Loading</div>}
          {/* {verifying && <Loading />} */}
        </Container>
      </Layout>
    </>
  )
}

export default AdminPage
