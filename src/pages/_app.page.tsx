/** Next core **/
import Head from 'next/head';
import type { AppProps } from 'next/app';

/** Dependencies **/
import { Provider } from 'react-redux';

/** Components **/
import { MainLayout } from '@/components/layout/MainLayout';

/** Store **/
import store from '@/store/index';

/** Styles **/
import '@/styles/styles.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { title } = pageProps;

  return (
    <Provider store={store}>
      <Head>
        <title>Countries App - {title}</title>
        <meta name="description" content="Countries App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
