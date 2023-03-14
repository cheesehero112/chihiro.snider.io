import { Card, Text, Image, Link, CardBody, CardFooter, Heading, Button, SimpleGrid } from '@chakra-ui/react';
import { SlArrowRightCircle } from 'react-icons/sl';

export function ArticleContents() {
  return (
    <SimpleGrid
      spacing={4}
      minChildWidth='350px'
    >
      <Card
        overflow='hidden'
        variant='outline'
        maxW='md'
        m={4}
        boxShadow='md'
        p='6'
      >
        <CardBody>
          <Heading
            size='lg'
            mb={3}
          >
            Deploy a React Vite app using GitHub Actions and GitHub Pages
          </Heading>
          <Link
            href='https://chihiro-and-justin.medium.com/deploy-a-react-vite-app-using-github-actions-and-github-pages-a370df30da97'
            target='_blank'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%' }}
              src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dfZSHh-ZXVuLvbS_3IfR2A.png'
              alt='Deployed App Screenshot'
              borderRadius='lg'
              _hover={{
                boxShadow: 'lg',
              }}
            />
          </Link>
          <Text
            py='2'
            mb={4}
          >
            A step-by-step guide on how to deploy a Vite React application on GitHub Pages using GitHub Actions enabeling a CI/CD pipeline
          </Text>
          <SlArrowRightCircle />
          <Link
            href='https://github.com/cheesehero112/vite-to-gh-pages'
            target='_blank'
          >
            See GitHub Repo
          </Link>
          <SlArrowRightCircle />
          <Link
            href='https://cheesehero112.github.io/vite-to-gh-pages/'
            target='_blank'
          >
            See the deloyed App
          </Link>
        </CardBody>

        <CardFooter>
          <Link
            href='https://chihiro-and-justin.medium.com/deploy-a-react-vite-app-using-github-actions-and-github-pages-a370df30da97'
            target='_blank'
            _hover={{
              textDecoration: 'none',
              boxShadow: 'lg',
            }}
          >
            <Button
              variant='solid'
              colorScheme='teal'
            >
              Read Medium Article
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
