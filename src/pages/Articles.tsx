import { ArticleContents } from '../components/ArticleContents';
import { Heading } from '@chakra-ui/react';

export default function Articles() {
  return (
    <>
      <Heading
        size='lg'
        m={8}
      >
        Articles
      </Heading>
      <ArticleContents />
    </>
  );
}
