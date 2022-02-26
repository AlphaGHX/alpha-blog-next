import Head from 'next/head'
import BlogCreate from '../../../components/blog-create'
import Container from '../../../components/container'
import Intro from '../../../components/intro'
import Layout from '../../../components/layout'
import VerifyLocalToken from '../../../components/verify-local-token'

const CreateBlog = () => {
  return (
    <Layout>
      <Head>
        <title>CreateBlog</title>
      </Head>
      <Intro />
      <Container>
        <VerifyLocalToken>
          <BlogCreate />
        </VerifyLocalToken>
      </Container>
    </Layout>
  )
}

export default CreateBlog
