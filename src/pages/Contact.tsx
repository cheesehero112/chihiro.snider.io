import { Heading, Box, Image, List, ListItem, Stack, Link } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <Box height='90vh'>
      <Heading
        size='lg'
        m={8}
      >
        Contact
      </Heading>
      <Stack
        display='flex'
        flexDirection='column'
        alignItems='center'
        m={8}
      >
        <Stack
          display='flex'
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Link
            href='https://www.linkedin.com/in/chihiro-snider/'
            target='_blank'
          >
            <Image
              borderRadius='full'
              boxSize='200px'
              minW='200px'
              src='https://github.com/cheesehero112/chihiro.snider.io/raw/main/public/Chihiroheadshot%20Small.jpeg'
              alt='Chihiro Snider'
              m={6}
            />
          </Link>
          <Box
            display='flex'
            alignItems='center'
            width='100%'
            justifyContent='center'
          >
            <List spacing={6}>
              <ListItem>
                <HiOutlineMail />
                chihirosnider@gmail.com
              </ListItem>
              <ListItem>
                <FaGithub />
                <Link
                  href='https://github.com/cheesehero112'
                  target='_blank'
                  _hover={{
                    color: 'teal.500',
                  }}
                >
                  github/cheesehero112
                </Link>
              </ListItem>
              <ListItem>
                <FaLinkedin />
                <Link
                  href='https://www.linkedin.com/in/chihiro-snider/'
                  target='_blank'
                  _hover={{
                    color: 'teal.500',
                  }}
                >
                  linkedin/chihiro-snider
                </Link>
              </ListItem>
              <ListItem>
                <FaMedium />
                <Link
                  href='https://chihiro-and-justin.medium.com/'
                  target='_blank'
                  _hover={{
                    color: 'teal.500',
                  }}
                >
                  chihiro-and-justin.medium.com
                </Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
