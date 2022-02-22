import Button from './button'
import ButtonSM from './button-sm'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  faHouseChimney,
  faMoon,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

const Intro = () => {
  const router = useRouter()

  const darkModeUpdate = () => {
    if (localStorage.dark === 'false') {
      document.documentElement.classList.add('dark')
      localStorage.dark = true
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.dark = false
    }
  }

  const routerPush = (url: string) => {
    router.push(url)
  }

  useEffect(() => {
    localStorage.dark = false
  }, [])

  return (
    <div
      className="fixed flex flex-row flex-wrap justify-between items-center
                w-full p-2 md:p-6 z-50 text-main-text backdrop-filter
                backdrop-blur shadow-main-base shadow-main-shadow dark:shadow-main-shadow-dark
              bg-bg-blur dark:bg-bg-blur-dark
              dark:text-main-text-dark
                duration-300"
    >
      <h1 className="font-main-text text-2xl md:text-5xl font-bold">
        Alpha Blog.
      </h1>
      <div className="felx-row flex-wrap justify-end hidden md:flex">
        <Button
          className="ml-6"
          icon={{ icon: faHouseChimney, size: 'sm' }}
          click={routerPush}
          clickProps={['/']}
        >
          主页
        </Button>
        <Button
          className="ml-6"
          icon={{ icon: faHeart, size: 'sm' }}
          click={routerPush}
          clickProps={['/blog']}
        >
          博客
        </Button>
        <Button
          className="ml-6"
          icon={{ icon: faMoon, size: 'sm' }}
          click={darkModeUpdate}
        >
          深色
        </Button>
      </div>
      <div className="flex md:hidden">
        <ButtonSM
          className="ml-2"
          icon={{ icon: faHouseChimney, size: 'sm' }}
          click={routerPush}
          clickProps={['/']}
        ></ButtonSM>
        <ButtonSM
          className="ml-2"
          icon={{ icon: faHeart, size: 'sm' }}
          click={routerPush}
          clickProps={['/blog']}
        ></ButtonSM>
        <ButtonSM
          className="ml-2"
          icon={{ icon: faMoon, size: 'sm' }}
          click={darkModeUpdate}
        ></ButtonSM>
      </div>
    </div>
  )
}

export default Intro
