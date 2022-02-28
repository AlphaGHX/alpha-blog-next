import { getBlogList } from '../../lib/api'
import { BlogListType, ResponseType } from '../../types/post'
import Head from 'next/head'
import BlogListEx from '../../components/blog-list-ex'
import VerifyLocalToken from '../../components/verify-local-token'
import CheckNet from '../../components/check-net'
import PageTitle from '../../components/page-title'

type Props = {
  blogList: ResponseType<BlogListType>
}

const AdminPage = ({ blogList }: Props) => {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <PageTitle>今天想做些什么呢?</PageTitle>
      <CheckNet data={blogList}>
        <VerifyLocalToken>
          <BlogListEx blogList={blogList}></BlogListEx>
        </VerifyLocalToken>
      </CheckNet>
    </>
  )
}

export default AdminPage

export const getServerSideProps = async () => {
  const blogList: ResponseType<BlogListType> = await getBlogList()

  return {
    props: { blogList },
  }
}
