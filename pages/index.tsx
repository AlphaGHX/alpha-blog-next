import Layout from '../components/layout'
import Intro from '../components/intro'
import Home from '../components/home'
import PostList from '../types/post'
import Head from 'next/head'

type Props = {
  allPosts: PostList[]
}

const Index = (props: Props) => {
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

