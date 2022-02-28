import Button from './button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  faHouseChimney,
  faMoon,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  const router = useRouter()

  const [loadingBar, setLoadingBar] = useState('w-0 opacity-0')

  const darkModeUpdate = () => {
    if (localStorage.dark === 'false') {
      document.documentElement.classList.add('dark')
      localStorage.dark = true
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.dark = false
    }
  }

  //顶栏加载动画处理函数
  const NProgress = {
    start: () => {
      setLoadingBar('w-1/4 opacity-100')
    },
    done: () => {
      setLoadingBar('w-full opacity-100')
      setTimeout(() => {
        setLoadingBar('opacity-0')
      }, 200)
      setTimeout(() => {
        setLoadingBar('w-0')
      }, 400)
    },
  }

  const routerPush = (url: string) => {
    router.push(url)
  }

  useEffect(() => {
    localStorage.dark = false
  }, [])

  //路由变化监听器
  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }

    const handleComplete = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="fixed w-full text-main-text duration-300 z-50">
      <div
        className="flex flex-row flex-wrap justify-between items-center backdrop-filter
                backdrop-blur shadow-base bg-bg-blur dark:bg-bg-blur-dark p-2 md:p-6
              dark:text-main-text-dark duration-300"
      >
        <h1 className="font-main-text text-2xl md:text-3xl font-bold">
          Alpha Blog.
        </h1>
        <div className="felx-row flex-wrap justify-end hidden md:flex">
          <Button
            className="ml-6"
            icon={{ icon: faHouseChimney, size: 'sm' }}
            click={routerPush}
            clickProps={['/']}
            type="md"
          >
            主页
          </Button>
          <Button
            className="ml-6"
            icon={{ icon: faHeart, size: 'sm' }}
            click={routerPush}
            clickProps={['/blog']}
            type="md"
          >
            博客
          </Button>
          <Button
            className="ml-6"
            icon={{ icon: faMoon, size: 'sm' }}
            click={darkModeUpdate}
            type="md"
          >
            深色
          </Button>
        </div>
        <div className="flex md:hidden">
          <Button
            className="ml-2"
            icon={{ icon: faHouseChimney, size: 'sm' }}
            click={routerPush}
            clickProps={['/']}
            type="sm"
          ></Button>
          <Button
            className="ml-2"
            icon={{ icon: faHeart, size: 'sm' }}
            click={routerPush}
            clickProps={['/blog']}
            type="sm"
          ></Button>
          <Button
            className="ml-2"
            icon={{ icon: faMoon, size: 'sm' }}
            click={darkModeUpdate}
            type="sm"
          ></Button>
        </div>
      </div>
      <div
        className={
          'h-1 duration-200 bg-main-text dark:bg-main-text-dark ' + loadingBar
        }
      ></div>
    </div>
  )
}

export default TopBar
