import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'

type Props = {
  icon?: FontAwesomeIconProps
  className?: string
  children?: ReactNode
  clickProps?: any[]
  click?: (...props: any) => any
  type: 'sm' | 'md'
}

const Button = ({
  icon,
  className,
  children,
  click,
  clickProps,
  type,
}: Props) => {
  const setStyle = (type: string) => {
    if (type === 'md') {
      return (
        'rounded-full px-6 shadow-base h-10 hover:shadow-big active:scale-95 text-base font-bold duration-100 ' +
        className
      )
    } else {
      return (
        'rounded-full px-3 shadow-small hover:shadow-base active:scale-95 text-base font-bold duration-100 ' +
        className
      )
    }
  }

  return (
    <button
      className={setStyle(type)}
      onClick={
        click &&
        (() => {
          clickProps ? click(...clickProps) : click()
        })
      }
    >
      {icon && <FontAwesomeIcon {...icon} />}
      {icon && children ? (
        <div className="pl-2 inline-block">{children}</div>
      ) : (
        <div className="inline-block">{children}</div>
      )}
    </button>
  )
}

export default Button
