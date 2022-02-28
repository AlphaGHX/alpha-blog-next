import Head from 'next/head'
import BlogEditor from '../../../components/blog-editor'
import CheckNet from '../../../components/check-net'
import PageTitle from '../../../components/page-title'
import VerifyLocalToken from '../../../components/verify-local-token'
import { getBlogInfo } from '../../../lib/api'
import { ResponseType, BlogInfoType } from '../../../types/post'

type Props = {
  blogInfo: ResponseType<BlogInfoType>
}

const EditBlog = ({ blogInfo }: Props) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <PageTitle>修改{'"' + blogInfo.data.name + '"'}。</PageTitle>
      <CheckNet data={blogInfo}>
        <VerifyLocalToken>
          <BlogEditor blogInfo={blogInfo}></BlogEditor>
        </VerifyLocalToken>
      </CheckNet>
    </>
  )
}

export default EditBlog

type Params = {
  params: { slug: string }
}

export const getServerSideProps = async ({ params: { slug } }: Params) => {
  const blogInfo: ResponseType<BlogInfoType> = await getBlogInfo(slug)

  return {
    props: { blogInfo },
  }
}
