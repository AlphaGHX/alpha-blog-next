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

const ButtonSM = ({ icon, className, children, click, clickProps }: Props) => {
  return (
    <div className={className}>
      <button
        className="rounded-full border-2 border-main-text px-3 dark:border-main-text-dark shadow-md
                   hover:shadow-lg active:scale-95  text-base"
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

export default ButtonSM
