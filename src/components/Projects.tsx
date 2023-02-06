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

export function Projects() {
  return (
    <SimpleGrid
      spacing={4}
      minChildWidth='350px'
      // templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
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
            maxW={{ base: '100%' }}
            src='https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/giphygraph.gif'
            alt='RediScope Graph GIF'
            borderRadius='lg'
          />
          <Text py='2'>
            An open-source web application that intuitively and elegantly displays relevant Redis cache performance metrics in real-time
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            variant='solid'
            colorScheme='teal'
          >
            Learn more
          </Button>
        </CardFooter>
      </Card>
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
            Places You&apos;ll Go
          </Heading>
          <Image
            objectFit='cover'
            maxW={{ base: '100%' }}
            src='https://github.com/cheesehero112/Places-You-ll-Go/raw/main/media/Places-Screenshot1.png'
            alt="Places You'll Go screenshot"
            borderRadius='lg'
          />
          <Text py='2'>A web application to keep track of dream destinations and visualize them on a map using ArcGIS API</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant='solid'
            colorScheme='teal'
          >
            Learn more
          </Button>
        </CardFooter>
      </Card>
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
            Localization Example
          </Heading>
          <Image
            objectFit='cover'
            maxW={{ base: '100%' }}
            src='https://github.com/cheesehero112/Localization-Example/raw/main/media/Localization-Jp.png'
            alt='Localization Example Screenshot'
            borderRadius='lg'
          />
          <Text py='2'>
            a simple example of how to localize a single website into multiple languages. A user can select between English, Spanish, and Japanese by
            clicking a corresponding button
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            variant='solid'
            colorScheme='teal'
          >
            Learn more
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
