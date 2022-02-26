import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Container from '../../components/container'
import { getBlogList } from '../../lib/api'
import { BlogListType, ResponseType } from '../../types/post'
import Head from 'next/head'
import BlogListEx from '../../components/blog-list-ex'
import VerifyLocalToken from '../../components/verify-local-token'
import CheckNet from '../../components/check-net'

type Props = {
  blogList: ResponseType<BlogListType>
}

const AdminPage = ({ blogList }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Admin</title>
        </Head>
        <Intro />
        <Container>
          <CheckNet data={blogList}>
            <VerifyLocalToken>
              <BlogListEx blogList={blogList}></BlogListEx>
            </VerifyLocalToken>
          </CheckNet>
        </Container>
      </Layout>
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
