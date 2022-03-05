import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta
        name="description"
        content={`A blog using Next.js`}
      />
      <link rel="icon" href="favicon.png" />
    </Head>
  )
}

export default Meta
