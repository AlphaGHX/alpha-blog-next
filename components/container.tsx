import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="pt-16 md:pt-36 max-w-screen-lg mx-auto w-11/12 md:w-4/5">
      {children}
    </div>
  )
}

export default Container
