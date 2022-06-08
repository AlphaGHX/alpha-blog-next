import { useRouter } from 'next/router'
import { useReducer, useRef, useState } from 'react'
import { createBlogInfo, postBlogFile } from '../lib/api'

type ACTIONTYPE = { type: 'loading' } | { type: 'done' }

const initialLoadingState = {
  text: '',
  style: '',
  disable: false,
}

function loadingReducer(state: typeof initialLoadingState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'loading':
      return {
        text: '处理中...',
        style: 'brightness-75 cursor-not-allowed disable',
        disable: true,
      }
    case 'done':
      return {
        text: '',
        style: '',
        disable: false,
      }
    default:
      throw new Error()
  }
}

const BlogCreate = () => {
  const router = useRouter()
  const [tags, setTages] = useState(new Array<string>())
  const [loadingState, loadingDispatch] = useReducer(
    loadingReducer,
    initialLoadingState
  )

  const blogName = useRef<HTMLInputElement>(null)
  const markdown = useRef<HTMLInputElement>(null)
  const topImg = useRef<HTMLInputElement>(null)
  const title = useRef<HTMLInputElement>(null)
  const tag = useRef<HTMLInputElement>(null)

  const markdownLabel = useRef<HTMLDivElement>(null)
  const topImgLabel = useRef<HTMLDivElement>(null)

  const text = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async () => {
    var r = confirm('确定要提交吗？')
    if (r == false) {
      return
    }

    loadingDispatch({ type: 'loading' })

    const blogNameValue = blogName.current?.value || ''
    const titleValue = title.current?.value || ''
    const textValue = text.current?.value || ''

    const markdownValue = markdown.current?.files || new FileList()
    const topImgValue = topImg.current?.files || new FileList()

    const tagsValue = tags

    if (
      blogNameValue === '' ||
      titleValue === '' ||
      textValue === '' ||
      tagsValue.length === 0 ||
      topImgValue.length === 0 ||
      markdownValue.length === 0
    ) {
      alert('输入不允许为空')
      loadingDispatch({ type: 'done' })
      return
    }

    try {
      const createBlogInfoRes = await createBlogInfo(localStorage.token, {
        name: blogNameValue.trim(), // 曾经引发bug，传入后端时需要注意首尾空行
        title: titleValue.trim(),
        text: textValue.trim(),
        tag: tagsValue,
      })

      if (createBlogInfoRes.code !== 0) {
        alert('处理info时' + createBlogInfoRes.msg)
        loadingDispatch({ type: 'done' })
        return
      }

      const postBlogFileRes = await postBlogFile(
        localStorage.token,
        topImgValue[0],
        markdownValue[0],
        blogNameValue.trim()
      )

      if (postBlogFileRes.code !== 0) {
        alert('处理file时' + postBlogFileRes.msg)
        loadingDispatch({ type: 'done' })
        return
      }

      router.back()
    } catch (error) {
      alert('请求时错误' + error)
      loadingDispatch({ type: 'done' })
      return
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

  return (
    <>
      <div className="card">
        <div className="m-5">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <div>
              <div className="ml-4 mb-1">ID(唯一，创建后不可变更)</div>
              <input
                className="input-base mb-5"
                name="blogName"
                ref={blogName}
                type="text"
                autoComplete="off"
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
                  className="ml-5 input-bnt"
                  onClick={addTag}
                >
                  添加
                </button>
              </div>
            </div>
            <div>
              <div className="ml-4 mb-1">顶部图片</div>
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
              <div className="ml-4 mb-1">Markdown</div>
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
              className={'input-bnt ' + loadingState.style}
              type="button"
              value={loadingState.disable ? loadingState.text : '完成'}
              onClick={handleSubmit}
              disabled={loadingState.disable}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default BlogCreate
