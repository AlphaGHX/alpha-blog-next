import Meta from './meta'
import Footer from './footer'
import TopBar from './top-bar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {

  return (
    <>
      <Meta />
      <TopBar />
      <div className="min-h-screen pt-16 md:pt-32 max-w-screen-lg mx-auto w-11/12 md:w-4/5">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
