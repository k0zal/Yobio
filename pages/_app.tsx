import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Layout from '../components/Layout';
import { Globalprovider } from '../providers/Globalprovider';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Yobio!</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        
      </Head>

<Layout>
  <Globalprovider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      </Globalprovider>
      </Layout>
    </>
  );
}