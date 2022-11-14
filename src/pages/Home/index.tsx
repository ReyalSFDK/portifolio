import * as React from "react"
import { Box, Flex } from "@chakra-ui/react";
import { AboutMeSection, ExperienceSection, JobSection, WelcomeSection } from "../../components";

export const Home: React.FC = () => {
	const [currentSection, setCurrentSection] = React.useState<Section>("welcome");

	const renderSection = () => {
		switch (currentSection) {
			case "aboutMe":
				return <AboutMeSection setCurrentSection={setCurrentSection} />;
			case "experience":
				return <ExperienceSection setCurrentSection={setCurrentSection} />;
			case "jobs":
				return <JobSection setCurrentSection={setCurrentSection} />;
			case "welcome":
				return <WelcomeSection setCurrentSection={setCurrentSection} />;
		}
	}

	return (
		<Flex
			justifyContent="center"
			w="100%"
			px={10}
			mt={100}
		>
			<Box
				textAlign="left"
				marginTop={{
					lg: 20,
				}}
			>
				{renderSection()}
			</Box>
		</Flex>
	)
}
