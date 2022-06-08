import { ResponseBody, AdminInfo } from '../types/request'
import Image from 'next/image'
import { useState } from 'react'
import { REMOTE } from '../lib/constants'

type Props = {
  adminInfo: ResponseBody<AdminInfo>
}

const MyCardEditor = ({ adminInfo }: Props) => {
  const handleSubmit = () => {}

  const [image, setImage] = useState(REMOTE.GET_ADMIN_AVATAR)

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
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <Image
                    layout="fill"
                    src={image}
                    alt="admin-avatar"
                    objectFit="cover"
                    priority
                  ></Image>
                  <label
                    className="absolute opacity-0 hover:opacity-100 backdrop-blur-base w-full h-full
                              rounded-full cursor-pointer flex justify-center items-center duration-300"
                    htmlFor="input"
                    onDrop={(e) => {
                      e.preventDefault()
                      setImage(URL.createObjectURL(e.dataTransfer.files[0]))
                    }}
                    onDragOver={(e) => {
                      e.preventDefault()
                    }}
                    onDragEnter={(e) => {
                      e.preventDefault()
                      console.log('Enter' + e)
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault()
                      console.log('Leave' + e)
                    }}
                  >
                    编辑
                  </label>
                  <input
                    id="input"
                    className="hidden"
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        setImage(URL.createObjectURL(e.target.files[0]))
                      }
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default MyCardEditor
