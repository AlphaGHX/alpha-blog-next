import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { memo, useEffect, useState } from 'react'

type Props = {
  isLoadin: boolean
  children: React.ReactNode
}

const Loading = ({ isLoadin, children }: Props) => {
  const [delayShow, setDelayShow] = useState('opacity-0')

  useEffect(() => {
    setTimeout(() => {
      setDelayShow('opacity-100')
    }, 100)
  }, [])

  const handelLoading = (
    <div
      className={'flex justify-center items-center duration-100 ' + delayShow}
    >
      <FontAwesomeIcon
        className="animate-spin"
        icon={faCircleNotch}
        size="lg"
      />
      <span className="ml-3">载入...</span>
    </div>
  )
  return <>{isLoadin ? handelLoading : children}</>
}

export default memo(Loading)
