type Props = {
  msg: string
}

const ErrorPage = ({ msg }: Props) => {
  return <div className="text-2xl font-bold text-red-400">错误: {msg}</div>
}

export default ErrorPage
