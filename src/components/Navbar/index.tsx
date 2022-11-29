import * as React from "react"
import { HStack, Heading, Stack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import { strings } from "../../localization";
import Typewriter from 'typewriter-effect';
import { Utils } from "../../utils";

export const Navbar: React.FC = () => {
	const navbarBgColor = useColorModeValue( "gray.100", "gray.900");

	return (
		<Stack
			justifyContent="space-between"
			position="sticky"
			zIndex="sticky"
			top={0}
			w="100%"
			py={5}
			px={10}
			direction={{
				base: "column",
				sm: "row",
			}}
			alignItems="center"
			bg={navbarBgColor}
		>
			<Heading
				textAlign="center"
				size="md"
			>
				<Typewriter
					options={{
						strings: Utils.shuffleArray(strings.navbar.title),
						autoStart: true,
						delay: 150,
						deleteSpeed: 1,
						loop: true,
						skipAddStyles: true,
					}}
				/>
			</Heading>
			<HStack
				spacing={2}
				justifyContent="center"
			>
				<IconButton
					size="xl"
					p={2}
					aria-label={strings.navbar.englishButton.ariaLabel}
					variant="ghost"
					icon={<GiBrazilFlag />}
				/>
				<IconButton
					size="xl"
					p={2}
					aria-label={strings.navbar.portugueseButton.ariaLabel}
					variant="ghost"
					icon={<GiUsaFlag />}
				/>
				<ColorModeSwitcher />
			</HStack>
		</Stack>
	)
}
