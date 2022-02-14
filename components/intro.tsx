import Button from './button'
import ButtonNoBorder from './button-no-border'
import { useEffect } from 'react'
import {
  faHouseChimney,
  faMoon,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

const Intro = () => {
  const darkModeUpdate = () => {
    if (localStorage.dark === 'false') {
      document.documentElement.classList.add('dark')
      localStorage.dark = true
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.dark = false
    }
  }

  useEffect(() => {
    localStorage.dark = false
  }, [])

  return (
    <div className="w-full fixed flex flex-row flex-wrap p-6 justify-between text-black dark:text-white items-center border-b-2">
      <h1 className="font-black text-2xl duration-300 md:text-5xl">
        Alpha Blog.
      </h1>
      <div className="felx-row flex-wrap justify-end hidden md:flex">
        <Button className="ml-4" icon={{ icon: faHouseChimney, size: 'sm' }}>
          主页
        </Button>
        <Button className="ml-4" icon={{ icon: faHeart, size: 'sm' }}>
          博客
        </Button>
        <Button
          className="ml-4"
          icon={{ icon: faMoon, size: 'sm' }}
          click={darkModeUpdate}
        ></Button>
      </div>
      <div className="flex md:hidden">
        <ButtonNoBorder
          className="ml-2"
          icon={{ icon: faHouseChimney, size: 'sm' }}
        ></ButtonNoBorder>
        <ButtonNoBorder
          className="ml-2"
          icon={{ icon: faHeart, size: 'sm' }}
        ></ButtonNoBorder>
        <ButtonNoBorder
          className="ml-2"
          icon={{ icon: faMoon, size: 'sm' }}
          click={darkModeUpdate}
        ></ButtonNoBorder>
      </div>
    </div>
  )
}

export default Intro
