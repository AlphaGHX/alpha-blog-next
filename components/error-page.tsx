type Props = {
  error: object
  msg: string
}

const ErrorPage = ({ error, msg }: Props) => {
  return (
    <div className="text-2xl font-bold text-red-400">
      错误: {msg} , 详细信息见log.{console.error(error)}
    </div>
  )
}

export default ErrorPage
