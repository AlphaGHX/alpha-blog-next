import Blog from '../../components/blog'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Container from '../../components/container'
import ErrorPage from '../../components/error-page'
import { getBlog, getBlogInfo } from '../../lib/api'
import { ResponseType, BlogInfoType } from '../../types/post'
import markdownToHtml from '../../lib/markdown2Html'
import Head from 'next/head'

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
          {blogInfo.code === 0 ? (
            <Blog rawHtml={rawHtml} blogInfo={blogInfo}></Blog>
          ) : (
            <ErrorPage error={blogInfo.data} msg={blogInfo.msg} />
          )}
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
