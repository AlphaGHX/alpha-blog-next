import PostType from '../types/post'
import Image from 'next/image'

type Props = {
  allPosts: PostType[]
}

const BlogList = ({ allPosts }: Props) => {
  return (
    <>
      {allPosts.map((post, index) => (
        <div
          className="flex flex-col md:flex-row
                     max-w-screen-lg mx-auto w-10/12 md:w-4/5 mt-10 border-2 border-black dark:border-white
                     shadow-md rounded-3xl overflow-hidden relative"
          key={index}
        >
          <div className="flex-shrink-0 h-40 sm:h-52 md:w-64 md:h-auto bg-black relative">
            <Image
              layout="fill"
              src={post.imgSrc}
              alt="blog-item-img"
              objectFit="cover"
            ></Image>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold mx-5 mt-8 mb-3 break-all line-clamp-2 overflow-hidden dark:text-white">{post.title}</div>
            <div className="text-lg mx-5 mt-3 mb-8 break-all line-clamp-3 overflow-hidden dark:text-white">{post.text}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogList
