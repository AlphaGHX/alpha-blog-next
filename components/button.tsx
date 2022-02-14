import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'

type Props = {
  icon?: FontAwesomeIconProps
  className?: string
  children?: ReactNode
  click?: () => void
}

const Button = ({ icon, className, children, click }: Props) => {
  return (
    <div className={className}>
      <button
        className="rounded-full px-4 bg-white dark:bg-black
                 border-black dark:border-white border-2 h-12 shadow-md
                   hover:shadow-lg active:scale-95 duration-300 text-base"
        onClick={click}
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
