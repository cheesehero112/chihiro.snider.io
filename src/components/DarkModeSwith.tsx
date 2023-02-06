import { useColorMode, Flex, Button, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import NextLink from 'next/link';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Flex m={12}>
      <Flex
        pos='fixed'
        top='1rem'
        right='1rem'
        align='center'
      >
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <NextLink
            href='/'
            passHref
          >
            <Button
              as='a'
              variant='ghost'
              aria-label='Home'
              my={5}
              w='100%'
            >
              Home
            </Button>
          </NextLink>
          <NextLink
            href='/Projects'
            passHref
          >
            <Button
              as='a'
              variant='ghost'
              aria-label='Projects'
              my={5}
              w='100%'
            >
              Projects
            </Button>
          </NextLink>
          <NextLink
            href='/Contact'
            passHref
          >
            <Button
              as='a'
              variant='ghost'
              aria-label='Contact'
              my={5}
              w='100%'
            >
              Contact
            </Button>
          </NextLink>
        </Flex>
        <IconButton
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          aria-label='Toggle Theme'
          colorScheme='teal'
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};
