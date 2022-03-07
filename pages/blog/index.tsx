import BlogList from '../../components/blog-list'
import { getBlogList } from '../../lib/api'
import { BlogListType, ResponseType } from '../../types/post'
import Head from 'next/head'
import CheckNet from '../../components/check-net'
import PageTitle from '../../components/page-title'
import Loading from '../../components/loading'
import { useEffect, useState } from 'react'

type Props = {
  blogList: ResponseType<BlogListType>
}

const Blog = ({ blogList }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <Head>
        <title>Blog - AlphaBlog</title>
      </Head>
      <PageTitle>博客。</PageTitle>
      <CheckNet data={blogList}>
        <Loading isLoadin={isLoading}>
          <BlogList blogList={blogList} />
        </Loading>
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
