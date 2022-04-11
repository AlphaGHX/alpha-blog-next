import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { verifyLocalToken } from '../lib/api'

type Props = {
  children?: ReactNode
}

const VerifyLocalToken = ({ children }: Props) => {
  const router = useRouter()

  const [verifyOk, setVerifyOk] = useState(false)

  useEffect(() => {
    verifyLocalToken().then((resolve) => {
      if (resolve !== true) {
        router.push('/admin/login')
      } else {
        setVerifyOk(true)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{verifyOk ? <>{children}</> : <div>Loding...</div>}</>
}

export default VerifyLocalToken
