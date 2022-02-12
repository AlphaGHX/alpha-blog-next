import Layout from '../components/layout'
import Container from '../components/container'
import Post from '../types/post'
import Head from 'next/head'

type Props = {
  allPosts: Post[]
}

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>alpha-blog</title>
        </Head>
        <Container>
          <div className="text-base">Container</div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
