import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps  } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {

  render() {
    const title = 'タイトル'
    const description = ''
    const keywords = ''
    const url = ''
    const type = 'website'
    const logo = '/vercel.svg'
    const favicon = '/favicon.ico'

    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content={type} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={logo} />
          <meta property="og:site_name" content={title} />
          <link rel="canonical" href={url} />
          <link rel="shortcut icon" href={favicon} />
          <link rel="apple-touch-icon" href={favicon} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document;