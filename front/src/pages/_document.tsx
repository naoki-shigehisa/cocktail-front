import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { Header } from "@/components/_common/Header"
import { Footer } from "@/components/_common/Footer"

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta charSet="utf-8" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="shortcut icon" href={'/favicon.ico'} />
          <link rel="apple-touch-icon" href={'/favicon.ico'} />
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
