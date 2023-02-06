import { Image, Stack, Heading, Text, Box, Card } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SocialButton } from './Footer';

export function About() {
  return (
    <>
      <Stack
        display='flex'
        direction='row'
        alignItems='center'
        maxW='80%'
        m='auto'
        mt={5}
        mb={5}
      >
        <Box
          display='flex'
          flexDirection='column'
          m='auto'
          width='400px'
          backgroundColor='none'
          minW='250px'
        >
          <Heading
            size='lg'
            mb={3}
            padding={3}
          >
            Hi, I&apos;m Chihiro Snider
          </Heading>
          <Text
            size='md'
            mb={3}
            padding={3}
          >
            I&apos;m a full-stack software engineer passionate about building web applications, problem-solving, and learning new technologies.
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius='full'
            boxSize='200px'
            minW='200px'
            src='https://github.com/cheesehero112/chihiro.snider.io/raw/main/public/Chihiroheadshot%20Small.jpeg'
            alt='Chihiro Snider'
            m={6}
          />
          <Stack
            direction={'row'}
            spacing={4}
            display='flex'
            justifyContent='center'
            m='auto'
          >
            <SocialButton
              label={'LinkedIn'}
              href={'https://www.linkedin.com/in/chihiro-snider/'}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={'Github'}
              href={'https://github.com/cheesehero112'}
            >
              <FaGithub />
            </SocialButton>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
