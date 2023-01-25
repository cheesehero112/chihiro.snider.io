import Head from 'next/head';
import Image from 'next/image';
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
          href='/favicon.ico'
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href='http://www.rediscope.com/'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              RediScope <span>-&gt;</span>
            </h2>
            <Image
              className={styles.grid}
              src='https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/Rediscope-banner.png'
              alt=''
              width={250}
              height={100}
            />
            <p className={inter.className}>
              open-source web application that intuitively and elegantly displays relevant Redis cache performance metrics in real-time
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
          </a>
        </div>
      </main>
    </>
  );
}
