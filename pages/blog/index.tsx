import BlogList from '../../components/blog-list'
import { getBlogList } from '../../lib/api'
import { BlogListType, ResponseType } from '../../types/post'
import Head from 'next/head'
import CheckNet from '../../components/check-net'
import PageTitle from '../../components/page-title'

type Props = {
  blogList: ResponseType<BlogListType>
}

const Blog = ({ blogList }: Props) => {
  return (
    <>
      <Head>
        <title>Blog - AlphaBlog</title>
      </Head>
      <PageTitle>博客。</PageTitle>
      <CheckNet data={blogList}>
        <BlogList blogList={blogList} />
      </CheckNet>
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
