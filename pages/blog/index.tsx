import Layout from '../../components/layout'
import Intro from '../../components/intro'
import BlogList from '../../components/blog-list'
import Container from '../../components/container'
import ErrorPage from '../../components/error-page'
import { getBlogList } from '../../lib/api'
import { BlogListType, ResponseType } from '../../types/post'
import Head from 'next/head'

type Props = {
  blogList: ResponseType<BlogListType>
}

const Blog = ({ blogList }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>alpha-blog</title>
        </Head>
        <Intro />
        <Container>
          <div
            className="font-main-text text-2xl mb-4 md:mb-10
            md:text-5xl font-bold text-main-text dark:text-main-text-dark"
          >
            所有博客。
          </div>
          {blogList.code === 0 ? (
            <BlogList blogList={blogList} />
          ) : (
            <ErrorPage error={blogList.data} msg={blogList.msg} />
          )}
        </Container>
      </Layout>
    </>
  )
}

export default Blog

export const getServerSideProps = async () => {
  const blogList: ResponseType<BlogListType> = await getBlogList()

  return {
    props: { blogList },
  }
}
