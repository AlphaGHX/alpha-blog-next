import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-CN">
        <Head />
        <body className="bg-bg-main dark:bg-main-text duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
