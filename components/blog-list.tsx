import { PostList } from '../types/post'
import { REMOTE } from '../lib/constants'
import parseTime from '../lib/parseTime'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  allPosts: PostList
}

const BlogList = ({ allPosts }: Props) => {
  const router = useRouter()

  const toBlogItem = (url: string) => {
    router.push('/blog/' + url)
  }

  return (
    <>
      {allPosts.list.map((post) => (
        <div
          className="flex flex-col md:flex-row text-main-text
                     max-w-screen-lg mx-auto mt-10 w-11/12 border-main-text border-2
                     md:w-4/5 dark:border-main-text-dark dark:text-main-text-dark
                     shadow-md rounded-3xl overflow-hidden relative cursor-pointer hover:border-black"
          key={post.ID}
          onClick={() => {
            toBlogItem(post.Name)
          }}
        >
          <div className="flex-shrink-0 h-40 sm:h-52 md:w-52 md:h-auto bg-main-text dark:brightness-75 relative">
            <Image
              layout="fill"
              src={REMOTE.LIST_IMG + post.Name}
              alt="blog-item-img"
              objectFit="cover"
            ></Image>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold mx-5 mt-5 mb-1 break-all line-clamp-2 overflow-hidden">
              {post.Title}
            </div>
            <div className="text-xs mx-5">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              {parseTime(post.CreatedAt)}
            </div>
            <div className="text-lg mx-5 my-5 break-all line-clamp-3 overflow-hidden">
              {post.Title}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogList
