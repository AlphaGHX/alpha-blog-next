import Layout from '../../components/layout'
import Intro from '../../components/intro'
import Container from '../../components/container'
import Blog from '../../components/blog'
import { getBlog, getBlogInfo } from '../../lib/api'
import { PostType } from '../../types/post'
import markdownToHtml from '../../lib/markdown2Html'
import Head from 'next/head'

type Props = {
  rawHtml: string
  blogInfo: PostType
}

const Post = ({ rawHtml, blogInfo }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{blogInfo.Name}</title>
        </Head>
        <Intro />
        <Container>
          <Blog rawHtml={rawHtml} blogInfo={blogInfo}></Blog>
        </Container>
      </Layout>
    </>
  )
}

export default Post

type Params = {
  params: { slug: string }
}

export const getServerSideProps = async ({ params: { slug } }: Params) => {
  const blogData = await getBlog(slug)

  const blogInfo = await getBlogInfo(slug)

  const rawHtml = blogData && (await markdownToHtml(blogData))

  return {
    props: { rawHtml, blogInfo },
  }
}
