import { REMOTE } from '../lib/constants'
import { PostType } from '../types/post'
import Image from 'next/image'
import parseTime from '../lib/parseTime'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  rawHtml: string
  blogInfo: PostType
}

const Blog = ({ rawHtml, blogInfo }: Props) => {
  return (
    <>
      <div
        className="flex flex-col
                  max-w-screen-lg mx-auto mt-10 w-11/12 border-main-text border-2
                  md:w-4/5 dark:border-main-text-dark
                  shadow-md rounded-3xl overflow-hidden relative"
      >
        <div className="h-64 sm:h-72 md:h-96 relative">
          <Image
            className="dark:brightness-75"
            layout="fill"
            src={REMOTE.ROOT + 'system/list/img/' + blogInfo.Name}
            alt="blog-item-img"
            objectFit="cover"
          ></Image>
          <div className="absolute bottom-0 px-2 sm:px-5 backdrop-blur-3xl w-full text-white dark:bg-bg-blur-blogtitle duration-300">
            <div className="text-2xl sm:text-3xl mt-2 sm:mt-5 mb-2">{blogInfo.Title}</div>
            <div className="text-xs mb-2 sm:mb-5">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              {parseTime(blogInfo.CreatedAt)}
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
