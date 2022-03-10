import { ResponseType, BlogListType } from '../types/post'
import { REMOTE } from '../lib/constants'
import parseTime from '../lib/parseTime'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import gsap from 'gsap'

type Props = {
  blogList: ResponseType<BlogListType>
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
      {blogList.data.map((post) => (
        <div
          className="flex flex-col md:flex-row mb-10 relative card loadAnimation"
          key={post.name}
        >
          <a
            className="flex-shrink-0 h-40 sm:h-52 md:w-60 md:h-auto
            bg-main-text dark:brightness-75 relative cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              toBlogItem(post.name)
            }}
            href={'blog/' + post.name}
          >
            <Image
              layout="fill"
              src={REMOTE.LIST_IMG + post.name}
              alt="blog-item-img"
              objectFit="cover"
              priority
            ></Image>
          </a>
          <div className="flex flex-col grow">
            <a
              className="text-2xl font-bold mx-5 mt-5 break-words line-clamp-2 overflow-hidden
              cursor-pointer no-underline hover:underline"
              onClick={(e) => {
                e.preventDefault()
                toBlogItem(post.name)
              }}
              href={'blog/' + post.name}
            >
              {post.title}
            </a>
            <div className="text-xs mx-5 mt-1">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              {parseTime(post.createdat)}
            </div>
            <div className="flex flex-row mx-5 flex-wrap">
              {post.tag &&
                post.tag.map((tag, index) => (
                  <div
                    className="text-xs py-0.5 px-2 mr-2 mt-1 rounded-full shadow-small
                    text-main-text dark:text-main-text-dark cursor-pointer no-underline hover:underline"
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      toTagList(tag)
                    }}
                  >
                    {tag}
                  </div>
                ))}
            </div>
            <div className="text-lg mx-5 my-5 break-words line-clamp-3 overflow-hidden">
              {post.text}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogList
