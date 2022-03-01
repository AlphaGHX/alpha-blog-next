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

  const handelDarkChange = () => {
    if (!('theme' in localStorage)) {
      setDarkState({ icon: faGear, text: '自动' })
    } else {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
        setDarkState({ icon: faMoon, text: '深色' })
      } else {
        document.documentElement.classList.remove('dark')
        setDarkState({ icon: faSun, text: '浅色' })
      }
    }
  }

  const darkModeUpdate = () => {
    if (!('theme' in localStorage)) {
      localStorage.theme = 'dark'
    } else if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
    } else {
      localStorage.removeItem('theme')
    }
    handelDarkChange()
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
    handelDarkChange()
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
        <div className="felx-row flex-wrap justify-end">
          <Button
            className="ml-2 md:ml-6"
            icon={{ icon: faHouseChimney, size: 'sm' }}
            click={routerPush}
            clickProps={['/']}
          >
            主页
          </Button>
          <Button
            className="ml-2 md:ml-6"
            icon={{ icon: faHeart, size: 'sm' }}
            click={routerPush}
            clickProps={['/blog']}
          >
            博客
          </Button>
          <Button
            className="ml-2 md:ml-6"
            icon={{ icon: darkState.icon, size: 'sm' }}
            click={darkModeUpdate}
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
