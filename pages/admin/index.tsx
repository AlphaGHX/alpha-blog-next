import { getBlogList } from '../../lib/api'
import { BlogListType, ResponseBody } from '../../types/request'
import Head from 'next/head'
import BlogListEx from '../../components/blog-list-ex'
import VerifyLocalToken from '../../components/verify-local-token'
import CheckNet from '../../components/check-net'
import PageTitle from '../../components/page-title'

type Props = {
  blogList: ResponseBody<BlogListType>
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
  const blogList: ResponseBody<BlogListType> = await getBlogList()

  return {
    props: { blogList },
  }
}
