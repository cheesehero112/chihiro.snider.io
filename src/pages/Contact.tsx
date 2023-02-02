import { Heading, Box, Image, Text, List, ListItem, ListIcon, Stack } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Stack
      display='flex'
      flex-flexDirection='column'
      m={8}
    >
      <Heading
        size='lg'
        m={8}
      >
        Contact
      </Heading>

      <Stack
        display='flex'
        flexDirection='row'
      >
        <Image
          borderRadius='full'
          boxSize='200px'
          minW='200px'
          src='https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/Chihiroheadshot.png'
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
  );
}
