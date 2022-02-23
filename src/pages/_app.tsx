/** Next core **/
import Head from 'next/head';
import type { AppProps } from 'next/app';

/** Styles **/
import '@styles/styles.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Countries App</title>
        <meta name="description" content="Countries App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
