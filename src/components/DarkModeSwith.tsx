import { useColorMode, Flex, Button, IconButton, useToast } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import NextLink from 'next/link';

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	const [display, changeDisplay] = useState('none');
	const toast = useToast();

	const showToast = () => {
		toast({
			title: 'Resume Downloaded.',
			description: "Chihiro's resume was downloaded successfuly",
			status: 'success',
			duration: 9000,
			isClosable: true,
			position: 'top',
		});
	};

	// resume download function
	const handleResumeDL = () => {
		fetch('Chihiro_Snider_resume_Jan2024').then((res) => {
			res.blob().then((blob) => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Chihiro_resume_051023.pdf';
				alink.click();

				showToast();
			});
		});
	};
	return (
		<Flex
			justifyContent='flex-end'
			mr={3}
		>
			<Flex
				// pos='absolute'
				top='1rem'
				right='1rem'
				align='center'
				mb={5}
				mt={2}
			>
				<Flex display={['none', 'none', 'flex', 'flex']}>
					<NextLink
						href='/'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Home'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
						>
							Home
						</Button>
					</NextLink>
					<NextLink
						href='/Projects'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Projects'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
						>
							Projects
						</Button>
					</NextLink>
					<NextLink
						href='/Articles'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Home'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
						>
							Articles
						</Button>
					</NextLink>
					<NextLink
						href='/Contact'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Contact'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
						>
							Contact
						</Button>
					</NextLink>
					<NextLink
						href='/'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Resume'
							my={5}
							mr={3}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
							onClick={handleResumeDL}
						>
							Download Resume
						</Button>
					</NextLink>
				</Flex>
				<IconButton
					aria-label='Open Menu'
					size='lg'
					mr={2}
					ml={2}
					icon={<HamburgerIcon />}
					display={['flex', 'flex', 'none', 'none']}
					onClick={() => {
						changeDisplay('flex');
						// toggleColorMode;
					}}
				/>
				<IconButton
					icon={isDark ? <SunIcon /> : <MoonIcon />}
					aria-label='Toggle Theme'
					colorScheme='teal'
					onClick={toggleColorMode}
				/>
			</Flex>

			<Flex
				w='100vw'
				bgColor='gray.50'
				color='black'
				zIndex={20}
				h='180vh'
				pos='fixed'
				top='0'
				left='0'
				overflow='auto'
				flexDir='column'
				display={display}
			>
				<Flex justify='flex-end'>
					<IconButton
						mt={2}
						mr={2}
						aria-label='Close Menu'
						size='lg'
						icon={<CloseIcon />}
						onClick={() => changeDisplay('none')}
					/>
				</Flex>

				<Flex
					flexDir='column'
					align='center'
				>
					<NextLink
						href='/'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Home'
							color='black'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
							onClick={() => changeDisplay('none')}
						>
							Home
						</Button>
					</NextLink>
					<NextLink
						href='/Articles'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							color='black'
							aria-label='Projects'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
							onClick={() => changeDisplay('none')}
						>
							Articles
						</Button>
					</NextLink>
					<NextLink
						href='/Projects'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							color='black'
							aria-label='Projects'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
							onClick={() => changeDisplay('none')}
						>
							Projects
						</Button>
					</NextLink>
					<NextLink
						href='/Contact'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Contact'
							color='black'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
							onClick={() => changeDisplay('none')}
						>
							Contact
						</Button>
					</NextLink>
					<NextLink
						href='/'
						passHref
					>
						<Button
							//   as='a'
							variant='ghost'
							aria-label='Resume'
							color='black'
							my={5}
							w='100%'
							_hover={{
								background: 'teal.50',
								color: 'teal.500',
							}}
							onClick={handleResumeDL}
						>
							Download Resume
						</Button>
					</NextLink>
				</Flex>
			</Flex>
		</Flex>
	);
};
