import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, DownloadIcon } from '@chakra-ui/icons';
import { Alike_Angular } from '@next/font/google';
import NextLink from 'next/link';

const Links = ['Home', 'Projects', 'Contact'];

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`${children}`}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // resume download function
  const handleResumeDL = () => {
    fetch('Chihiro_resume.pdf').then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Chihiro_resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}
          >
            <Image
              width='100px'
              borderRadius={7}
              src='https://github.com/cheesehero112/chihiro.snider.io/raw/main/public/portfolio-narrow-logo.png'
              alt='Website Logo'
              m={6}
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<DownloadIcon />}
              onClick={handleResumeDL}
            >
              Resume
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: 'none' }}
          >
            <Stack
              as={'nav'}
              spacing={4}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
