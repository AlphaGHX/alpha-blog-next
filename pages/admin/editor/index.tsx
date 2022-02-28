import Head from 'next/head'
import BlogCreate from '../../../components/blog-create'
import PageTitle from '../../../components/page-title'
import VerifyLocalToken from '../../../components/verify-local-token'

const CreateBlog = () => {
  return (
    <>
      <Head>
        <title>CreateBlog</title>
      </Head>
      <PageTitle>新博客。</PageTitle>
      <VerifyLocalToken>
        <BlogCreate />
      </VerifyLocalToken>
    </>
  )
}

export default CreateBlog
