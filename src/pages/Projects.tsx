import { ProjectContents } from '../components/ProjectContents';
import { Heading } from '@chakra-ui/react';

export default function Projects() {
  return (
    <>
      <Heading
        size='lg'
        m={8}
      >
        Projects
      </Heading>
      <ProjectContents />
    </>
  );
}
