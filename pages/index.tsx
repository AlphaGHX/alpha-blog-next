import Home from '../components/home'
import Head from 'next/head'
import PageTitle from '../components/page-title'
import { useEffect, useState } from 'react'
import Loading from '../components/loading'
import { getGitHubUserInfo } from '../lib/api'
import CheckNet from '../components/check-net'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [outsideData, setOutsideData] = useState({
    code: 0,
    data: undefined,
    msg: '',
  })

  const getInfo = async () => {
    setOutsideData(await getGitHubUserInfo('alphaghx'))
    setIsLoading(false)
  }

  useEffect(() => {
    getInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Home - AlphaBlog</title>
      </Head>
      <PageTitle>主页。</PageTitle>
      <Loading isLoadin={isLoading}>
        <CheckNet data={outsideData}>
          <Home data={outsideData.data} />
        </CheckNet>
      </Loading>
    </>
  )
}

export default Index
