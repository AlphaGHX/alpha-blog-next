import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="pt-14 md:pt-28">{children}</div>
}

export default Container
