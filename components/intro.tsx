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
      className="w-full fixed flex flex-row flex-wrap p-2 md:p-6 justify-between
                 text-black dark:text-white items-center shadow-md backdrop-filter
                 backdrop-blur z-50 border-b-2 border-black dark:border-white"
    >
      <h1 className="font-black text-2xl md:text-5xl">Alpha Blog.</h1>
      <div className="felx-row flex-wrap justify-end hidden md:flex">
        <Button
          className="ml-4"
          icon={{ icon: faHouseChimney, size: 'sm' }}
          click={routerPush}
          clickProps={['/']}
        >
          主页
        </Button>
        <Button
          className="ml-4"
          icon={{ icon: faHeart, size: 'sm' }}
          click={routerPush}
          clickProps={['/blog']}
        >
          博客
        </Button>
        <Button
          className="ml-4"
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
