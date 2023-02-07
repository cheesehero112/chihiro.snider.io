// import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { DarkModeSwitch } from '@/components/DarkModeSwith';
import Footer from '../components/Footer';

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
        <DarkModeSwitch />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    );
  }
}
