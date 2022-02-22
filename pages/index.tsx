import Layout from '../components/layout'
import Intro from '../components/intro'
import Home from '../components/home'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>alpha-blog</title>
        </Head>
        <Intro />
        <Home />
      </Layout>
    </>
  )
}

export default Index
