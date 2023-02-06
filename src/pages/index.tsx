import Head from 'next/head';
import Link from 'next/link';
import { Projects } from '../components/Projects';
import { About } from '../components/About';

import { Inter } from '@next/font/google';

import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Chihiro Snider - Software Engineer</title>
        <meta
          name='description'
          content='Chihiro Snider Software Engineer website'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='https://github.com/cheesehero112/chihiro.snider.io/raw/main/public/fav-portfolio.png'
        />
      </Head>
      <About />
      <Projects />
    </>
  );
}
