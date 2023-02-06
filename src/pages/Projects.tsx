import { Projects } from '../components/Projects';
import { Heading } from '@chakra-ui/react';

export default function Project() {
  return (
    <>
      <Heading
        size='lg'
        m={8}
      >
        Projects
      </Heading>
      <Projects />
    </>
  );
}
