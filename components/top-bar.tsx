import Button from './button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  faHouseChimney,
  faMoon,
  faHeart,
  faGear,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  const router = useRouter()

  const [loadingBar, setLoadingBar] = useState('w-0 opacity-0')
  const [darkState, setDarkState] = useState({ icon: faGear, text: '自动' })

  // 切换深色模式
  const changeMode = () => {
    if (!('theme' in localStorage)) {
      setDarkState({ icon: faMoon, text: '深色' })
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      if (localStorage.theme === 'dark') {
        setDarkState({ icon: faSun, text: '浅色' })
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      } else {
        setDarkState({ icon: faGear, text: '自动' })
        localStorage.removeItem('theme')
        darkModeInit()
      }
    }
  }

  // 初始化深色模式
  const darkModeInit = () => {
    if (!('theme' in localStorage)) {
      setDarkState({ icon: faGear, text: '自动' })
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      if (localStorage.theme === 'dark') {
        setDarkState({ icon: faMoon, text: '深色' })
        document.documentElement.classList.add('dark')
      } else {
        setDarkState({ icon: faSun, text: '浅色' })
        document.documentElement.classList.remove('dark')
      }
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
    darkModeInit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="fixed w-full duration-base z-50">
      <div
        className="flex flex-row flex-wrap justify-between items-center
                  backdrop-blur-base shadow-base p-2 md:p-6 duration-base"
      >
        <h1 className="font-main-text text-2xl md:text-3xl font-bold">
          Alpha Blog.
        </h1>
        <div className="felx-row flex-wrap justify-end">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" onClick={(e) => e.preventDefault()}>
            <Button
              className="ml-2 md:ml-6"
              icon={{ icon: faHouseChimney, size: 'sm' }}
              click={routerPush}
              clickProps={['/']}
            >
              主页
            </Button>
          </a>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/blog" onClick={(e) => e.preventDefault()}>
            <Button
              className="ml-2 md:ml-6"
              icon={{ icon: faHeart, size: 'sm' }}
              click={routerPush}
              clickProps={['/blog']}
            >
              博客
            </Button>
          </a>
          <Button
            className="ml-2 md:ml-6"
            icon={{ icon: darkState.icon, size: 'sm' }}
            click={changeMode}
          >
            {darkState.text}
          </Button>
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
