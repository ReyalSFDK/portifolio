import * as React from "react"
import { HStack, Heading, Stack, IconButton } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import { strings} from "../../localization";

export const Navbar: React.FC = () => {
	return (
		<Stack
			justifyContent="space-between"
			position="fixed"
			top={0}
			w="100%"
			py={5}
			px={10}
			direction={{
				base: "column",
				sm: "row",
			}}
		>
			<Heading
				textAlign="center"
			>
				ReyalS
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
