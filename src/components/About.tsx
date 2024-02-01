import { Image, Stack, Heading, Text, Box, Card, Flex } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SocialButton } from './Footer';

export function About() {
	return (
		<Stack
			display='flex'
			direction={['column-reverse', 'row', 'row', 'row']}
			alignItems='center'
			maxW='80%'
			m='auto'
			mt={20}
			mb={5}
		>
			<Box
				display='flex'
				flexDirection='column'
				m='auto'
				width='400px'
				backgroundColor='none'
				minW='250px'
				maxW='90%'
				alignItems='center'
				justifyContent='space-between'
			>
				<Flex
					align='left'
					flexDirection='column'
				>
					<Heading
						size='lg'
						mb={3}
						mt={3}
						padding={3}
					>
						Hi, I&apos;m Chihiro Snider
					</Heading>

					<Text
						size='md'
						mb={3}
						padding={3}
					>
						I&apos;m a full-stack software engineer with classical music background. I&apos;m passionate about building web applications,
						problem-solving, and learning new technologies.
					</Text>
				</Flex>
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
						<FaLinkedin size={70} />
					</SocialButton>
					<SocialButton
						label={'Github'}
						href={'https://github.com/cheesehero112'}
					>
						<FaGithub size={70} />
					</SocialButton>
				</Stack>
			</Box>
		</Stack>
	);
}
