import { Heading, Box, Image, Text, List, ListItem, ListIcon, Stack } from '@chakra-ui/react';

export default function Contact() {
  return (
    <>
      <Heading
        size='lg'
        m={8}
      >
        Contact
      </Heading>
      <Stack
        display='flex'
        flex-flexDirection='column'
        alignItems='center'
        m={8}
      >
        <Stack
          display='flex'
          flexDirection='row'
        >
          <Image
            borderRadius='full'
            boxSize='200px'
            minW='200px'
            src='https://github.com/cheesehero112/chihiro.snider.io/raw/main/public/Chihiroheadshot%20Small.jpeg'
            alt='Chihiro Snider'
            m={6}
          />
          <Box
            display='flex'
            alignItems='center'
            width='100%'
          >
            <List spacing={6}>
              <ListItem>
                <ListIcon />
                Email
              </ListItem>
              <ListItem>
                <ListIcon />
                GitHub
              </ListItem>
              <ListItem>
                <ListIcon />
                LinkedIn
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
