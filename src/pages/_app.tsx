// import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  } else {
    return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}
