import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useState } from 'react'
import {
  faHouseChimney,
  faMoon,
  faHeart,
  faGear,
  faSun,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyCard from './my-card'
import Loading from './loading'
import { getGitHubUserInfo } from '../lib/api'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [outsideData, setOutsideData] = useState({
    code: 0,
    data: undefined,
    msg: '',
  })

  const getInfo = async () => {
    setOutsideData(await getGitHubUserInfo('alphaghx'))
    setIsLoading(false)
  }

  useEffect(() => {
    getInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const topAnimation = gsap.from('.topAnimation', {
      opacity: 0,
      scale: 0.9,
      delay: 0.1,
    })

    const topScrollAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.topAnimation',
          start: 'center center',
          end: 'bottom top',
          scrub: true,
          pin: true,
        },
      })
      .from('.topText1', { y: 50, duration: 1 })
      .to('.topScrollTip', { opacity: 0 }, 0.2)
      .from('.topText2', { y: 100, opacity: 0, duration: 1 }, 0.2)
      .from('.topText3', { y: 150, opacity: 0, duration: 1 }, 0.4)
      .from(
        '.topIcon1',
        { opacity: 0, scale: 1.5, rotate: 0, duration: 1 },
        0.9
      )
      .from(
        '.topIcon2',
        { opacity: 0, scale: 1.5, rotate: 0, duration: 1 },
        0.6
      )
      .from(
        '.topIcon3',
        { opacity: 0, scale: 1.5, rotate: 0, duration: 1 },
        0.3
      )
      .from(
        '.topIcon4',
        { opacity: 0, scale: 1.5, rotate: 0, duration: 1 },
        0.6
      )
      .from(
        '.topIcon5',
        { opacity: 0, scale: 1.5, rotate: 0, duration: 1 },
        0.9
      )

    const aboutMeScrollAnimation = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.aboutMeAnimation',
          start: 'center center',
          end: 'bottom top',
          scrub: true,
          pin: true,
        },
      })
      .from('.aboutMeText1', { y: 200, duration: 1 })
      .from('.aboutMeCard1', { y: 300, opacity: 0, duration: 1 }, 0.2)

    return () => {
      topAnimation.kill()
      topScrollAnimation.kill()
      aboutMeScrollAnimation.kill()
    }
  }, [])

  return (
    <>
      <div style={{ height: '400vh' }} className="relative">
        <div
          className="topAnimation flex flex-col justify-center items-center h-screen
                    font-bold select-none text-color-base -mt-16 md:-mt-32 text-xl md:text-3xl"
        >
          <div className="topText1 mt-3">你好，欢迎来到我的博客。</div>
          <div className="topText2 mt-3">
            在这里我会分享一些我觉得有趣的事。
          </div>
          <div className="topText3 mt-3">
            Enjoy <FontAwesomeIcon icon={faHeart} size="1x" />
          </div>
          <div className="absolute flex items-center justify-around w-full top-3/4">
            <div className="topIcon1">
              <FontAwesomeIcon icon={faHeart} size="1x" />
            </div>
            <div className="topIcon2">
              <FontAwesomeIcon icon={faSun} size="1x" />
            </div>
            <div className="topIcon3">
              <FontAwesomeIcon icon={faMoon} size="1x" />
            </div>
            <div className="topIcon4">
              <FontAwesomeIcon icon={faGear} size="1x" />
            </div>
            <div className="topIcon5">
              <FontAwesomeIcon icon={faHouseChimney} size="1x" />
            </div>
          </div>
          <div className="topScrollTip animate-bounce absolute flex justify-center items-center bottom-20">
            <FontAwesomeIcon icon={faAngleDown} size="1x" />
          </div>
        </div>
        <div className="aboutMeAnimation flex flex-col justify-center items-center h-screen font-bold select-none text-color-base">
          <div className="aboutMeText1 mt-3 text-xl md:text-3xl">关于Alpha</div>
          <div className="aboutMeCard1 mt-10 w-full">
            <Loading isLoadin={isLoading}>
              <MyCard data={outsideData.data}></MyCard>
            </Loading>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
