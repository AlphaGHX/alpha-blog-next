import Head from 'next/head'
import CheckNet from '../../components/check-net'
import MyCardEditor from '../../components/my-card-editor'
import PageTitle from '../../components/page-title'
import { getAdminInfo } from '../../lib/api'
import { AdminInfo, ResponseBody } from '../../types/request'

type Props = {
  adminInfo: ResponseBody<AdminInfo>
}

const EditAdmin = ({ adminInfo }: Props) => {
  return (
    <>
      <Head>
        <title>EditAdmin - AlphaBlog</title>
      </Head>
      <PageTitle>管理员编辑。</PageTitle>
      <CheckNet data={adminInfo}>
        <MyCardEditor adminInfo={adminInfo}></MyCardEditor>
      </CheckNet>
    </>
  )
}

export default EditAdmin

export const getServerSideProps = async () => {
  const adminInfo: ResponseBody<AdminInfo> = await getAdminInfo()

  return {
    props: { adminInfo },
  }
}
