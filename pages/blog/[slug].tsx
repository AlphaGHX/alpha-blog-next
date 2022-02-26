import Blog from '../../components/blog'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Container from '../../components/container'
import ErrorPage from '../../components/error-page'
import { getBlog, getBlogInfo } from '../../lib/api'
import { ResponseType, BlogInfoType } from '../../types/post'
import markdownToHtml from '../../lib/markdown2Html'
import Head from 'next/head'
import CheckNet from '../../components/check-net'

type Props = {
  rawHtml: string
  blogInfo: ResponseType<BlogInfoType>
}

const Post = ({ rawHtml, blogInfo }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{blogInfo.data.title}</title>
        </Head>
        <Intro />
        <Container>
          <CheckNet data={blogInfo}>
            <Blog rawHtml={rawHtml} blogInfo={blogInfo}></Blog>
          </CheckNet>
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
