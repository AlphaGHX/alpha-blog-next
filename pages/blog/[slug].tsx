import Layout from '../../components/layout'
import Intro from '../../components/intro'
import Container from '../../components/container'
import { getBlog, getBlogInfo } from '../../lib/api'
import { REMOTE } from '../../lib/constants'
import markdownToHtml from '../../lib/markdown2Html'
import { PostType } from '../../types/post'
import Head from 'next/head'
import Image from 'next/image'

type Props = {
  rawHtml: string
  blogInfo: PostType
}

const Post = ({ rawHtml, blogInfo }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{blogInfo.id}</title>
        </Head>
        <Intro />
        <Container>
          <div
            className="flex flex-col
                      max-w-screen-lg mx-auto mt-10 w-11/12 border-black border-2
                      md:w-4/5 dark:border-white
                      shadow-md rounded-3xl overflow-hidden relative"
          >
            <div className="h-44 sm:h-72 md:h-96 relative">
              <Image
                layout="fill"
                src={REMOTE.ROOT + '/system/list/img/' + blogInfo.id}
                alt="blog-item-img"
                objectFit="cover"
              ></Image>
            </div>
            <div className="m-2 sm:m-5">
              <article
                className="prose dark:prose-invert lg:prose-base max-w-none"
                dangerouslySetInnerHTML={{ __html: rawHtml }}
              ></article>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Post

type Params = {
  params: { slug: string }
}

export const getServerSideProps = async ({ params: { slug } }: Params) => {
  const blogData = await getBlog(slug)

  const blogInfo = await getBlogInfo(slug)

  const rawHtml = blogData && (await markdownToHtml(blogData))

  return {
    props: { rawHtml, blogInfo },
  }
}
