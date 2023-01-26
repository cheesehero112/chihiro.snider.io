import Head from 'next/head';

import { Inter } from '@next/font/google';
import {
  Flex,
  Card,
  Text,
  Image,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Input,
  Stack,
  Button,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
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
      {/* <Flex
        height='100vh'
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
      > */}
      <SimpleGrid
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
      >
        <Card
          overflow='hidden'
          variant='outline'
          maxW='md'
          m={4}
        >
          <CardBody>
            <Heading
              size='lg'
              mb={3}
            >
              RediScope
            </Heading>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '300px' }}
              src='https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/Rediscope-banner.png'
              alt='RediScope Logo'
              borderRadius='lg'
            />
            <Text py='2'>
              open-source web application that intuitively and elegantly displays relevant Redis cache performance metrics in real-time
            </Text>
          </CardBody>

          <CardFooter>
            <Button
              variant='solid'
              colorScheme='blue'
            >
              Learn more
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}
