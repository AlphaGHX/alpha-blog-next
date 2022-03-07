import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandScissors } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import { useEffect } from 'react'

type Props = {
  data: any
}

const Home = ({ data }: Props) => {
  const external = [
    {
      site: 'GitHub',
      icon: faGithub,
      url: data.html_url,
    },
    {
      site: 'Telegram',
      icon: faTelegram,
      url: 'https://t.me/alpha_tl',
    },
    {
      site: 'OSU!',
      icon: faHandScissors,
      url: 'https://osu.ppy.sh/users/11312999',
    },
  ]

  return (
    <>
      <div className="relative card">
        <div className="text-center my-5 flex flex-col justify-center items-center">
          <div className="rounded-full mb-5 h-20 w-20 relative overflow-hidden">
            <Image
              layout="fill"
              src={data.avatar_url}
              alt="blog-item-img"
              objectFit="cover"
              priority
            ></Image>
          </div>
          <div className="mb-5 text-2xl font-bold">Alpha</div>
          <div className="mb-10 text-1xl font-bold">
            你好，欢迎来到我的博客。
          </div>
          <div className="flex justify-center items-center w-full">
            {external.map((v, i) => (
              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="w-20 md:w-32 mx-1 md:mx-5 hover:underline"
                key={i}
              >
                <div>
                  <FontAwesomeIcon
                    className="scale-150"
                    icon={v.icon}
                    size="1x"
                  />
                </div>
                <span className="text-sm">{v.site}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
