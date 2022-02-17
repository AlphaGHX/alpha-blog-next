import Layout from '../../components/layout'
import Intro from '../../components/intro'
import BlogList from '../../components/blog-list'
import Container from '../../components/container'
import { getBlogList } from '../../lib/api'
import { PostList } from '../../types/post'
import Head from 'next/head'

type Props = {
  allPosts: PostList
}

const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>alpha-blog</title>
        </Head>
        <Intro />
        <Container>
          <BlogList allPosts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Blog

export const getServerSideProps = async () => {
  const allPosts = await getBlogList()

  return {
    props: { allPosts },
  }
}
