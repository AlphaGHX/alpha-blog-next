import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <div>当前页面是:{slug}</div>
    </>
  )
}

export default Post

type Params = {
  params: string
}

export const getStaticProps = async ({ params }: Params) => {
  return {
    props: {},
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'test1' } }, { params: { slug: 'test2' } }],
    fallback: false,
  }
}
