import Button from '../components/button'
import {
  faCirclePlus,
  faArrowRightFromBracket,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { BlogListType, ResponseBody } from '../types/request'
import { useRouter } from 'next/router'
import BlogListItem from './blog-list-item'

type Props = {
  blogList: ResponseBody<BlogListType>
}

const BlogListEx = ({ blogList }: Props) => {
  const router = useRouter()

  const createBlog = () => {
    router.push('/admin/editor')
  }

  const editUser = () => {
    router.push('/admin/edit-admin')
  }

  const editBlog = (blogName: string) => {
    router.push('/admin/editor/' + blogName)
  }

  const loginOut = () => {
    localStorage.removeItem('token')
    router.push('admin/login')
  }

  return (
    <>
      <div className="flex flex-row items-center mb-4 md:mb-10 text-main-text dark:text-main-text-dark">
        <Button
          icon={{ icon: faCirclePlus, size: 'sm' }}
          click={createBlog}
          className="mr-2 md:mr-6"
        >
          写个博客
        </Button>
        <Button
          icon={{ icon: faUser, size: 'sm' }}
          click={editUser}
          className="mr-2 md:mr-6"
        >
          修改管理员信息
        </Button>
        <Button
          icon={{ icon: faArrowRightFromBracket, size: 'sm' }}
          click={loginOut}
          className="text-red-400"
        >
          退出登录
        </Button>
      </div>
      {blogList.data.map((post) => (
        <BlogListItem key={post.name} post={post} onTitleClick={editBlog} />
      ))}
    </>
  )
}

export default BlogListEx
