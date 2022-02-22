type Props = {
  error: object
  msg: string
}

const ErrorPage = ({ error, msg }: Props) => {
  return (
    <div className="text-2xl font-bold">
      请求错误: {msg} , 详细信息见log.{console.log(error)}
    </div>
  )
}

export default ErrorPage
