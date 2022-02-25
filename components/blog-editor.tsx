import { ResponseType, BlogListType } from '../types/post'
import { REMOTE } from '../lib/constants'
import parseTime from '../lib/parseTime'
import { getBlogList } from '../lib/api'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

type Props = {
  blogList: ResponseType<BlogListType>
}

const BlogEditor = ({ blogList }: Props) => {
  const router = useRouter()
  const [nowBlog, setNowBlog] = useState('')
  const [isCreact, setIsCreac] = useState(false)
  const [tags, setTags] = useState([])

  const BlogEditor = (
    <>
      <div
        className="font-main-text text-2xl mb-4 md:mb-10
            md:text-5xl font-bold text-main-text dark:text-main-text-dark"
      >
        {nowBlog}
      </div>
      <div
        className="text-main-text dark:text-main-text-dark
                  shadow-main-base shadow-main-shadow dark:shadow-main-shadow-dark
                  rounded-3xl overflow-hidden"
      >
        <div className="m-5">
          <form
            onSubmit={(e) => {
              handleSubmit()
              e.preventDefault()
            }}
          >
            {isCreact && (
              <div>
                <input
                  className="input-base mb-5"
                  name="title"
                  ref={title}
                  type="text"
                  placeholder="标题"
                />
              </div>
            )}
            <div>
              <input
                className="input-base mb-5"
                name="title"
                ref={title}
                type="text"
                placeholder="标题"
              />
            </div>
            <div>
              <textarea
                className="input-base mb-5"
                name="text"
                ref={text}
                placeholder="简述"
              />
            </div>
            <div>
              <input
                className="input-base mb-10"
                name="tag"
                ref={tag}
                type="text"
                placeholder="标签"
              />
              <button>添加</button>
              {tags.map((v, i) => (
                <div key={i}>{v}</div>
              ))}
            </div>
            <input className="input-bnt" type="submit" value="登录" />
          </form>
        </div>
      </div>
    </>
  )

  const BlogListEditor = (
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

  return <></>
}

export default BlogEditor

export const getServerSideProps = async () => {
  const blogList: ResponseType<BlogListType> = await getBlogList()

  return {
    props: { blogList },
  }
}
