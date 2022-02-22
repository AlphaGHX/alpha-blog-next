import parseTime from '../lib/parseTime'
import { REMOTE } from '../lib/constants'
import { ResponseType, BlogInfoType } from '../types/post'
import Image from 'next/image'
import router from 'next/router'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  rawHtml: string
  blogInfo: ResponseType<BlogInfoType>
}

const Blog = ({ rawHtml, blogInfo }: Props) => {
  const toTagList = (url: string) => {
    router.push('/tag/' + url)
  }

  return (
    <>
      <div
        className="flex flex-col
                  shadow-main-small shadow-main-shadow dark:shadow-main-shadow-dark
                  rounded-3xl overflow-hidden relative"
      >
        <div className="h-64 sm:h-72 md:h-96 relative">
          <Image
            className="dark:brightness-75"
            layout="fill"
            src={REMOTE.ROOT + 'system/list/img/' + blogInfo.data.name}
            alt="blog-item-img"
            objectFit="cover"
          ></Image>
          <div className="absolute bottom-0 px-2 sm:px-5 backdrop-blur-3xl w-full text-white bg-bg-blur-blogtitle duration-300">
            <div className="text-2xl sm:text-3xl mt-2 sm:mt-5 mb-2">
              {blogInfo.data.title}
            </div>
            <div className="text-xs mb-2 sm:mb-2">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              {parseTime(blogInfo.data.createdat)}
            </div>
            <div className="flex flex-row flex-wrap mb-2">
              {blogInfo.data.tag &&
                blogInfo.data.tag.map((tag, index) => (
                  <div
                    className="text-xs py-0.5 px-2 mr-2 mt-1 rounded-full
                    shadow-main-small
                    cursor-pointer no-underline hover:underline"
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
          </div>
        </div>
        <div className="m-2 sm:m-5">
          <article
            className="prose dark:prose-invert lg:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: rawHtml }}
          ></article>
        </div>
      </div>
    </>
  )
}

export default Blog