import { ResponseType, BlogListType } from '../types/post'
import { REMOTE } from '../lib/constants'
import parseTime from '../lib/parseTime'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  return (
    <>
      {blogList.data.map((post) => (
        <div
          className="flex flex-col md:flex-row text-main-text
          dark:text-main-text-dark duration-100 mb-10 shadow-base
          rounded-3xl overflow-hidden relative"
          key={post.name}
        >
          <div
            className="flex-shrink-0 h-40 sm:h-52 md:w-60 md:h-auto
            bg-main-text dark:brightness-75 relative cursor-pointer"
            onClick={() => {
              toBlogItem(post.name)
            }}
          >
            <Image
              layout="fill"
              src={REMOTE.LIST_IMG + post.name}
              alt="blog-item-img"
              objectFit="cover"
            ></Image>
          </div>
          <div className="flex flex-col">
            <div
              className="text-2xl font-bold mx-5 mt-5 break-all line-clamp-2 overflow-hidden
              cursor-pointer no-underline hover:underline"
              onClick={() => {
                toBlogItem(post.name)
              }}
            >
              {post.title}
            </div>
            <div className="text-xs mx-5 mt-1">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              {parseTime(post.createdat)}
            </div>
            <div className="flex flex-row mx-5 flex-wrap">
              {post.tag &&
                post.tag.map((tag, index) => (
                  <div
                    className="text-xs py-0.5 px-2 mr-2 mt-1 rounded-full
                    shadow-main-small shadow-main-shadow dark:shadow-main-shadow-dark
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
            <div className="text-lg mx-5 my-5 break-all line-clamp-3 overflow-hidden">
              {post.text}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogList
