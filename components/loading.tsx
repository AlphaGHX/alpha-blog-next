import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { memo, useEffect, useState } from 'react'

type Props = {
  isLoadin: boolean
  children: React.ReactNode
}

const Loading = ({ isLoadin, children }: Props) => {
  // 延迟显示所采用的动画
  const disable = 'opacity-0 translate-y-6'
  const enable = 'opacity-100 translate-y-0'
  const [delayStyle, setDelayStyle] = useState(disable)
  // 延迟渲染，保证动画执行完成
  const [delayRender, setDelayRender] = useState(false)

  useEffect(() => {
    let timer
    // 一秒后触发加载动画
    timer = setTimeout(() => {
      setDelayStyle(enable)
    }, 1000)
    if (isLoadin === false) {
      if (timer !== null) {
        // 未触发加载动画，等待100ms再过度，因为要确保组件挂载完成（这是一个妥协，我还没找到好的解决方案）
        clearTimeout(timer)
        setTimeout(() => {
          setDelayRender(true)
          setDelayStyle(enable)
        }, 100)
      } else {
        // 已经触发加载动画，就等待加载动画消失，再显示结果
        setDelayStyle(disable)
        setTimeout(() => {
          setDelayRender(true)
          setDelayStyle(enable)
        }, 500)
      }
      return () => {
        setDelayStyle('')
        setDelayRender(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadin])

  const handelLoading = (
    <div className="flex justify-center items-center">
      <FontAwesomeIcon
        className="animate-spin"
        icon={faCircleNotch}
        size="lg"
      />
      <span className="ml-3 text-base">载入...</span>
    </div>
  )
  return (
    <div className={'duration-500 ' + delayStyle}>
      {delayRender ? children : handelLoading}
    </div>
  )
}

export default memo(Loading)
