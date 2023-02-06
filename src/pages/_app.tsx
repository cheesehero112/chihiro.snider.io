// import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
