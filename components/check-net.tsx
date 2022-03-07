import { ReactNode } from 'react'
import { ResponseType } from '../types/post'
import ErrorPage from './error-page'

type Props = {
  data: ResponseType<any>
  children?: ReactNode
}

const CheckNet = ({ data, children }: Props) => {
  return (
    <>
      {data.code === 0 ? (
        children
      ) : (
        <ErrorPage error={data.data} msg={data.msg} />
      )}
    </>
  )
}

export default CheckNet
