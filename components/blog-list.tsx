import { ResponseBody, BlogListType } from '../types/request'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import gsap from 'gsap'
import BlogListItem from './blog-list-item'

type Props = {
  blogList: ResponseBody<BlogListType>
}

const BlogList = ({ blogList }: Props) => {
  const router = useRouter()

  const toBlogItem = (url: string) => {
    router.push('/blog/' + url)
  }

  const toTagList = (url: string) => {
    router.push('/tag/' + url)
  }

  useEffect(() => {
    const loadAnimation = gsap.fromTo(
      '.loadAnimation',
      { opacity: 0, y: 48, marginBottom: 60 },
      {
        opacity: 1,
        y: 0,
        marginBottom: 40,
        ease: 'expo.out',
        duration: 0.8,
        delay: 0.1,
      }
    )
    return () => {
      loadAnimation.kill()
    }
  }, [])

  return (
    <>
      {blogList.data.length !== 0 ? (
        blogList.data.map((post) => (
          <BlogListItem
            key={post.name}
            post={post}
            onTitleClick={toBlogItem}
            onTagClick={toTagList}
          />
        ))
      ) : (
        <div className="text-2xl font-bold text-red-400">
          还没有博客，请添加一个博客。
        </div>
      )}
    </>
  )
}

export default BlogList
