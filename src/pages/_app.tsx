import { AppProps } from 'next/app'
import Head from 'next/head';
import GlobalStyles from '../styles/Global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript Example</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A simple project to work w/ TypeScript, React, NextJS and Emotion" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}