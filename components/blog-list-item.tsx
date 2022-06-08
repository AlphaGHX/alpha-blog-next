import { REMOTE } from '../lib/constants'
import { BlogInfoType } from '../types/request'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons'
import parseTime from '../lib/parseTime'
import { useState } from 'react'

type props = {
  post: BlogInfoType
  onTitleClick: (url: string) => void
  onTagClick?: (url: string) => void
}

const BlogListItem = ({ post, onTagClick, onTitleClick }: props) => {
  const [scale, setScale] = useState('scale-x-100')

  return (
    <>
      <div
        className="flex flex-col md:flex-row mb-10 relative card loadAnimation"
        key={post.name}
      >
        <a
          className="flex-shrink-0 h-40 sm:h-52 md:w-60 md:h-auto
            bg-main-text dark:brightness-75 relative cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            onTitleClick(post.name)
          }}
          onMouseEnter={() => setScale('scale-105')}
          onMouseLeave={() => setScale('scale-100')}
          href={'blog/' + post.name}
        >
          <Image
            layout="fill"
            src={REMOTE.LIST_IMG + post.name}
            alt="blog-item-img"
            objectFit="cover"
            className={scale + ' duration-300'}
            priority
          ></Image>
        </a>
        <div className="flex flex-col grow">
          <a
            className="text-2xl font-bold mx-5 mt-5 break-words line-clamp-2 overflow-hidden
              cursor-pointer no-underline hover:underline"
            onClick={(e) => {
              e.preventDefault()
              onTitleClick(post.name)
            }}
            onMouseEnter={() => setScale('scale-105')}
            onMouseLeave={() => setScale('scale-100')}
            href={'blog/' + post.name}
          >
            {post.title}
          </a>
          <div className="flex flex-row text-xs mx-5 my-1 items-center">
            <FontAwesomeIcon className="mr-2" icon={faClock} />
            {parseTime(post.createdat)}
            <FontAwesomeIcon className="ml-4 mr-2" icon={faEye} />
            {post.views}
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
                    onTagClick && onTagClick(tag)
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
    </>
  )
}

export default BlogListItem
