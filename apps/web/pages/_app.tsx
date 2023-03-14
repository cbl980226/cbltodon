import { AppProps } from 'next/app'
import Head from 'next/head'
import favicon from '../public/favicon.ico'
import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cbltodon</title>
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
