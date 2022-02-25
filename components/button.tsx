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
}

const Button = ({ icon, className, children, click, clickProps }: Props) => {
  return (
    <div className={className}>
      <button
        className="rounded-full px-6 shadow-base h-12
        hover:shadow-big active:scale-95 text-base font-bold duration-100"
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
    </div>
  )
}

export default Button
