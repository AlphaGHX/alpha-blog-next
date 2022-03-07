import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { delBlog, postBlogFile, postBlogInfo } from '../lib/api'
import { REMOTE } from '../lib/constants'
import { PostBlogInfo, ResponseType } from '../types/post'

type Props = {
  blogInfo: ResponseType<PostBlogInfo>
}

const BlogEditor = ({ blogInfo: blogInfo }: Props) => {
  const router = useRouter()
  const [tags, setTages] = useState(new Array<string>())
  const [isProcessing, setIsProcessing] = useState({
    text: '',
    style: '',
    disable: false,
  })

  const blogName = useRef<HTMLInputElement>(null)
  const title = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLTextAreaElement>(null)
  const tag = useRef<HTMLInputElement>(null)
  const topImg = useRef<HTMLInputElement>(null)
  const markdown = useRef<HTMLInputElement>(null)
  const topImgLabel = useRef<HTMLDivElement>(null)
  const markdownLabel = useRef<HTMLDivElement>(null)

  const handleSubmit = () => {
    var r = confirm('确定要提交吗？')
    if (r == false) {
      return
    }

    setIsProcessing({
      text: '处理中...',
      style: 'brightness-75 cursor-not-allowed disable',
      disable: true,
    })

    const blogNameValue = blogName.current?.value || ''
    const titleValue = title.current?.value || ''
    const textValue = text.current?.value || ''
    const tagsValue = tags
    const topImgValue = topImg.current?.files || new FileList()
    const markdownValue = markdown.current?.files || new FileList()

    if (
      blogNameValue === '' ||
      titleValue === '' ||
      textValue === '' ||
      tagsValue.length === 0
    ) {
      alert('输入不允许为空')
    } else {
      const data: PostBlogInfo = {
        name: blogNameValue,
        title: titleValue,
        text: textValue,
        tag: tagsValue,
      }
      postBlogInfo(localStorage.token, data)
        .then((res) => {
          if (res.code === 0) {
            return postBlogFile(
              localStorage.token,
              topImgValue[0],
              markdownValue[0],
              blogNameValue
            )
          } else {
            alert('处理Info时' + res.msg)
            return Promise.reject()
          }
        })
        .then(
          (res) => {
            if (res.code === 0) {
              router.back()
            } else {
              alert('处理File时' + res.msg)
            }
            setIsProcessing({
              text: '',
              style: '',
              disable: false,
            })
          },
          (reject) => {
            router.back()
            setIsProcessing({
              text: '',
              style: '',
              disable: false,
            })
          }
        )
    }
  }

  const handleDel = () => {
    var r = confirm('确定要删除吗？')
    if (r == true) {
      delBlog(localStorage.token, blogInfo.data.name).then((res) => {
        if (res.code === 0) {
          router.back()
        } else {
          alert('请求错误:' + res.msg)
        }
      })
    }
  }

  const addTag = () => {
    const getTag = tag.current?.value
    if (getTag === undefined || getTag === '') {
      alert('标签输入为空')
    } else {
      for (let i = 0; i < tags.length; i++) {
        if (tags[i] === getTag) {
          alert('标签重复')
          return
        }
      }
      setTages([...tags, getTag])
    }
    if (tag.current?.value !== undefined) {
      tag.current.value = ''
    }
  }

  const removeTag = (cTag: string) => {
    const cTags = tags
    for (let i = 0; i < cTags.length; i++) {
      if (cTags[i] === cTag) {
        cTags.splice(i, 1)
        break
      }
    }
    setTages([...cTags])
  }

  const handleChangeTopImg = (e: React.FormEvent<HTMLInputElement>) => {
    if (topImgLabel.current?.innerText && e.currentTarget.files) {
      if (e.currentTarget.files.length === 0) {
        topImgLabel.current.innerText = '拖拽到此或选取文件'
      } else {
        topImgLabel.current.innerText =
          '已选择:' + e.currentTarget.files[0].name
      }
    }
  }

  const handleChangeMarkdown = (e: React.FormEvent<HTMLInputElement>) => {
    if (markdownLabel.current?.innerText && e.currentTarget.files) {
      if (e.currentTarget.files.length === 0) {
        markdownLabel.current.innerText = '拖拽到此或选取文件'
      } else {
        markdownLabel.current.innerText =
          '已选择:' + e.currentTarget.files[0].name
      }
    }
  }

  useEffect(() => {
    blogName.current && (blogName.current.value = blogInfo.data.name)
    blogName.current && (blogName.current.disabled = true)
    title.current && (title.current.value = blogInfo.data.title)
    text.current && (text.current.value = blogInfo.data.text)
    setTages(blogInfo.data.tag)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div
        className="card"
      >
        <div className="m-5">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <div>
              <div className="ml-4 mb-1">ID(不可变更)</div>
              <input
                className="input-base mb-5 brightness-75 cursor-not-allowed"
                name="blogName"
                ref={blogName}
                type="text"
                autoComplete="off"
                disabled={true}
              />
            </div>
            <div>
              <div className="ml-4 mb-1">标题</div>
              <input
                className="input-base mb-5"
                name="title"
                ref={title}
                type="text"
                autoComplete="off"
              />
            </div>
            <div>
              <div className="ml-4 mb-1">描述</div>
              <textarea className="input-texta mb-5" name="text" ref={text} />
            </div>
            <div>
              <div className="ml-4 mb-5">
                标签：
                {tags.length !== 0 ? (
                  tags.map((v, i) => (
                    <span
                      className="text-xs py-0.5 px-2 mr-2 rounded-full
                                shadow-main-small cursor-not-allowed
                              text-main-text dark:text-main-text-dark"
                      key={i}
                      onClick={(e) => {
                        const tag = e.currentTarget.innerText
                        removeTag(tag)
                      }}
                    >
                      {v}
                    </span>
                  ))
                ) : (
                  <span>无</span>
                )}
              </div>
              <div className="ml-4 mb-1">添加标签</div>
              <div className="flex flex-row justify-between mb-5">
                <input
                  className="input-base w-3/4 shrink-0"
                  name="tag"
                  ref={tag}
                  type="text"
                  autoComplete="off"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addTag()
                    }
                  }}
                />
                <button
                  type="button"
                  className="ml-5 w-full h-10 shadow-small font-bold
                            duration-300 hover:shadow-base active:shadow-small
                            rounded-full px-4"
                  onClick={addTag}
                >
                  添加
                </button>
              </div>
            </div>
            <div>
              <div className="ml-4 mb-1">
                顶部图片（如不选择即使用原来的图片）
                <a
                  className="underline"
                  href={REMOTE.LIST_IMG_EX + blogInfo.data.name}
                  download={blogInfo.data.name}
                >
                  获取原图片
                </a>
              </div>
              <div className="w-full py-10 text-center shadow-small relative mb-5 rounded-3xl overflow-hidden">
                <div ref={topImgLabel}>拖拽到此或选取文件</div>
                <input
                  className="opacity-0 absolute w-full h-full top-0 left-0 z-10 cursor-pointer"
                  name="topImg"
                  ref={topImg}
                  type="file"
                  onChange={handleChangeTopImg}
                />
              </div>
            </div>
            <div>
              <div className="ml-4 mb-1">
                Markdown（如不选择即使用原来的Markdown）
                <a
                  className="underline"
                  href={REMOTE.BLOG_EX + blogInfo.data.name}
                  download={blogInfo.data.name}
                >
                  获取原Markdown
                </a>
              </div>
              <div className="w-full py-10 text-center shadow-small relative mb-10 rounded-3xl overflow-hidden">
                <div ref={markdownLabel}>拖拽到此或选取文件</div>
                <input
                  className="opacity-0 absolute w-full h-full top-0 left-0 z-10 cursor-pointer"
                  name="topImg"
                  ref={markdown}
                  type="file"
                  onChange={handleChangeMarkdown}
                />
              </div>
            </div>
            <input
              className={'input-bnt mb-5 ' + isProcessing.style}
              type="button"
              value={isProcessing.disable ? isProcessing.text : '完成'}
              onClick={handleSubmit}
              disabled={isProcessing.disable}
            />
            <input
              className={
                'input-bnt bg-red-400 text-white dark:bg-red-900 dark:text-white ' +
                isProcessing.style
              }
              type="button"
              value={isProcessing.disable ? isProcessing.text : '删除'}
              onClick={handleDel}
              disabled={isProcessing.disable}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default BlogEditor
