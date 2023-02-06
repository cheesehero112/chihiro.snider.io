import {
  Flex,
  Card,
  Text,
  Image,
  Link,
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
import { SlArrowRightCircle } from 'react-icons/sl';

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
          <Text
            py='2'
            mb={4}
          >
            An open-source web application that intuitively and elegantly displays relevant Redis cache performance metrics in real-time
          </Text>
          <SlArrowRightCircle />
          <Link href='https://github.com/oslabs-beta/RediScope'>See GitHub Repo</Link>
        </CardBody>

        <CardFooter>
          <Link href='https://medium.com/@corald/rediscope-scope-out-your-redis-cache-performance-31ad2a101299'>
            <Button
              variant='solid'
              colorScheme='teal'
            >
              Read Medium Article
            </Button>
          </Link>
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
          <Link href='https://github.com/cheesehero112/Places-You-ll-Go'>
            <Button
              variant='solid'
              colorScheme='teal'
            >
              Go to GitHub Repo
            </Button>
          </Link>
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
          <Text
            py='2'
            mb={4}
          >
            A simple example of how to localize a single website into multiple languages. A user can select between English, Spanish, and Japanese by
            clicking a corresponding button
          </Text>
        </CardBody>

        <CardFooter>
          <Link href='https://localization-example.netlify.app/'>
            <Button
              variant='solid'
              colorScheme='teal'
            >
              Visit Website
            </Button>
          </Link>
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
            Lecture: Software Localization
          </Heading>
          <Image
            objectFit='cover'
            maxW={{ base: '100%' }}
            src='https://github.com/cheesehero112/chihiro.snider.io/raw/main/public/SoftwareLocalization-lectureCover-ChihiroSnider.jpg'
            alt='Software Localization Lecture Screenshot'
            borderRadius='lg'
          />
          <Text
            py='2'
            mb={4}
          >
            A lecture on Software Localization, where I gave a brief overview of &apos;what it is&apos;, &apos;why it&apos;s important&apos;, and
            &apos;how to implement&apos;
          </Text>
          <SlArrowRightCircle />
          <Link href='https://github.com/cheesehero112/Localization-Example'>See GitHub Repo</Link>
        </CardBody>

        <CardFooter>
          <Button
            variant='solid'
            colorScheme='teal'
          >
            <Link href='https://www.linkedin.com/posts/activity-7025899673152352256-9Wr3?utm_source=share&utm_medium=member_desktop'>
              Watch Lecture
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
