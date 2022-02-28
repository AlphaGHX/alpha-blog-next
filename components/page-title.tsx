type Props = {
  children: React.ReactNode
}

const PageTitle = ({ children }: Props) => {
  return (
    <div
      className="font-main-text text-2xl mb-4 md:mb-8
        md:text-4xl font-bold text-main-text dark:text-main-text-dark"
    >
      {children}
    </div>
  )
}

export default PageTitle
