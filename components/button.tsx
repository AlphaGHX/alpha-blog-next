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
  click?: Function
}

const Button = ({ icon, className, children, click, clickProps }: Props) => {
  return (
    <button
      className={
        'md:h-10 rounded-full px-3 md:px-6 shadow-small hover:shadow-base md:shadow-base md:hover:shadow-big active:scale-95 active:hover:shadow-base text-sm md:text-base font-bold duration-100 ' +
        className
      }
      onClick={
        click &&
        (() => {
          clickProps ? click(...clickProps) : click()
        })
      }
    >
      {icon && <FontAwesomeIcon {...icon} />}
      {icon && children ? (
        <div className="hidden md:pl-2 md:inline-block">{children}</div>
      ) : (
        <div className="hidden md:inline-block">{children}</div>
      )}
    </button>
  )
}

export default Button
