import { ForwardedRef, forwardRef } from 'react'

type Props = {
  name?: string
  type?: 'text' | 'password'
  title?: string
  autoComplete?: string
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input = (
  { name, type = 'text', title, autoComplete = 'off', onKeyUp }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      {title && <div className="ml-4 mb-1">{title}</div>}
      <input
        className="input-base mb-5"
        name={name}
        ref={ref}
        type={type}
        autoComplete={autoComplete}
        onKeyUp={onKeyUp}
      />
    </>
  )
}

export default forwardRef(Input)
