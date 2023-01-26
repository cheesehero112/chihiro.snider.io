import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

export default function Greetings() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        direction='column'
        background={formBackground}
        p={12}
        rounded={6}
      >
        <Heading mb={6}>Greetings!!</Heading>
        <Input placeholder='test input'></Input>
        <Button
          mb={6}
          colorScheme='teal'
        >
          Click me!
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color!</Button>
      </Flex>
    </Flex>
  );
}
