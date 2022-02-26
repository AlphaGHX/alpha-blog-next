import Container from '../../components/container'
import Layout from '../../components/layout'
import Intro from '../../components/intro'
import Head from 'next/head'
import Login from '../../components/login'

const LoginPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Login</title>
        </Head>
        <Intro />
        <Container>
          <Login />
        </Container>
      </Layout>
    </>
  )
}

export default LoginPage
