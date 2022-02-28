import BlogList from '../../components/blog-list'
import { getBlogUseTag } from '../../lib/api'
import { ResponseType, BlogListType } from '../../types/post'
import CheckNet from '../../components/check-net'
import Head from 'next/head'
import PageTitle from '../../components/page-title'

type Props = {
  tagList: ResponseType<BlogListType>
  slug: string
}

const TagList = ({ tagList, slug }: Props) => {
  return (
    <>
      <Head>
        <title>Search tag:{slug}</title>
      </Head>
      <PageTitle>与{'"' + slug + '"'}有关的博客。</PageTitle>
      <CheckNet data={tagList}>
        <BlogList blogList={tagList}></BlogList>
      </CheckNet>
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
