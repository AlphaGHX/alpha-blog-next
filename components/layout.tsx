import Meta from './meta'
import Footer from './footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-white dark:bg-black duration-300">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
