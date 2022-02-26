import Intro from '../../components/intro'
import Layout from '../../components/layout'
import Container from '../../components/container'
import BlogList from '../../components/blog-list'
import { getBlogUseTag } from '../../lib/api'
import { ResponseType, BlogListType } from '../../types/post'
import CheckNet from '../../components/check-net'
import Head from 'next/head'

type Props = {
  tagList: ResponseType<BlogListType>
  slug: string
}

const TagList = ({ tagList, slug }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Search tag:{slug}</title>
        </Head>
        <Intro />
        <Container>
          <div
            className="font-main-text text-2xl mb-4 md:mb-10
            md:text-5xl font-bold text-main-text dark:text-main-text-dark"
          >
            与{'"' + slug + '"'}有关的博客。
          </div>
          <CheckNet data={tagList}>
            <BlogList blogList={tagList}></BlogList>
          </CheckNet>
        </Container>
      </Layout>
    </>
  )
}

export default TagList

type Params = {
  params: { slug: string }
}

export const getServerSideProps = async ({ params: { slug } }: Params) => {
  const tagList = await getBlogUseTag(slug)

  return {
    props: { tagList, slug },
  }
}
