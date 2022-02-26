import { useRef, useState } from 'react'

type Props = {
  isCreate: boolean
  oldBlogName: string
}

const BlogEditor = ({ isCreate, oldBlogName }: Props) => {
  const tags = useState([])

  const blogName = useRef<HTMLInputElement>(null)
  const title = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLTextAreaElement>(null)
  const tag = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {}

  return (
    <>
      <div
        className="font-main-text text-2xl mb-4 md:mb-10
                  md:text-5xl font-bold text-main-text dark:text-main-text-dark"
      >
        {oldBlogName}
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
            {isCreate && (
              <div>
                <input
                  className="input-base mb-5"
                  name="blogName"
                  ref={blogName}
                  type="text"
                  placeholder="博客名称"
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
}

export default BlogEditor
