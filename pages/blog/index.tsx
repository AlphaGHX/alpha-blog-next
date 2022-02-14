import Layout from '../../components/layout'
import Intro from '../../components/intro'
import BlogList from '../../components/blog-list'
import Container from '../../components/container'
import { getAllPost } from '../../lib/api'
import PostType from '../../types/post'
import Head from 'next/head'

type Props = {
  allPosts: PostType[]
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
  const allPosts = await getAllPost()

  return {
    props: { allPosts },
  }
}
