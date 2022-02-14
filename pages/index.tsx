import Layout from '../components/layout'
import Intro from '../components/intro'
import { getAllPost } from '../lib/api'
import PostType from '../types/post'
import Head from 'next/head'

type Props = {
  allPosts: PostType[]
}

const Index = (props: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>alpha-blog</title>
        </Head>
        <Intro />
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = await getAllPost()

  return {
    props: { allPosts },
  }
}
