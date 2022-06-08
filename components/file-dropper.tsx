import { useReducer, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const FileDropper = ({ children }: Props) => {
  const [hoverStyle, setHoverStyle] = useState(' opacity-0 ')

  return (
    <>
      {children}
      <label className={hoverStyle + ''} htmlFor="file-input"></label>
    </>
  )
}

export default FileDropper
