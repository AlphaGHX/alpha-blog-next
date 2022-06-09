import { ResponseBody, AdminInfo } from '../types/request'
import Image from 'next/image'
import { useState } from 'react'
import { REMOTE } from '../lib/constants'
import FileDropper from './file-dropper'

type Props = {
  adminInfo: ResponseBody<AdminInfo>
}

type ImageHoverStyle = ' opacity-100 ' | ' opacity-0 '

const MyCardEditor = ({ adminInfo }: Props) => {
  const [imageUrl, setImageUrl] = useState(REMOTE.GET_ADMIN_AVATAR)
  const [imageHoverStyle, setImageHoverStyle] =
    useState<ImageHoverStyle>(' opacity-0 ')

  const handleSubmit = () => {}

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
              <div className="flex justify-center items-center">
                <FileDropper
                  className="relative h-20 w-20"
                  onDrop={(files: FileList) => {
                    setImageUrl(URL.createObjectURL(files[0]))
                  }}
                  onEnter={() => {
                    setImageHoverStyle(' opacity-100 ')
                  }}
                  onLeave={() => {
                    setImageHoverStyle(' opacity-0 ')
                  }}
                >
                  <Image
                    className="rounded-full"
                    layout="fill"
                    src={imageUrl}
                    alt="admin-avatar"
                    objectFit="cover"
                    priority
                  ></Image>
                  <div
                    className={
                      'absolute-tc rounded-full backdrop-blur-base px-[6px] text-sm shadow-base duration-base' +
                      imageHoverStyle
                    }
                  >
                    修改
                  </div>
                </FileDropper>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default MyCardEditor
