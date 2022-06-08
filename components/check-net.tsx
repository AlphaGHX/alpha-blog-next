import { ReactNode } from 'react'
import { ResponseBody } from '../types/request'
import ErrorPage from './error-page'

type Props = {
  data: ResponseBody<any>
  children?: ReactNode
}

const CheckNet = ({ data, children }: Props) => {
  return (
    <>
      {data.code === 0 ? (
        children
      ) : (
        <ErrorPage msg={data.msg} />
      )}
    </>
  )
}

export default CheckNet
