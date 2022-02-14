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
        className="rounded-full bg-white border-2 border-black px-3 dark:bg-black dark:border-white shadow-md
                   hover:shadow-lg active:scale-95 duration-300 text-base"
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
