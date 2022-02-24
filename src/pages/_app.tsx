/** Next core **/
import Head from 'next/head';
import type { AppProps } from 'next/app';

/** Components **/
import { MainContainer } from '../Components/layout/MainContainer';

/** Styles **/
import '@styles/styles.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { title } = pageProps;

  return (
    <>
      <Head>
        <title>Countries App - {title}</title>
        <meta name="description" content="Countries App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-wrapper">
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </div>
    </>
  );
}
