import * as React from "react"
import { Box, Flex } from "@chakra-ui/react";
import {
	AboutMeSection,
	ExperienceSection,
	JobSection,
	PersonalProjects,
	WelcomeSection
} from "../../components";

export const Home: React.FC = () => {
	const [currentSection, setCurrentSection] = React.useState<Section>("welcome");

	const goToCurrentSection = (section: Section) => {
		window.scrollTo(0, 0);
		setCurrentSection(section)
	}

	const renderSection = () => {
		switch (currentSection) {
			case "aboutMe":
				return <AboutMeSection setCurrentSection={goToCurrentSection} />;
			case "experience":
				return <ExperienceSection setCurrentSection={goToCurrentSection} />;
			case "jobs":
				return <JobSection setCurrentSection={goToCurrentSection} />;
			case "welcome":
				return <WelcomeSection setCurrentSection={goToCurrentSection} />;
			case "personalProjects":
				return <PersonalProjects setCurrentSection={goToCurrentSection} />;
		}
	}

	return (
		<Flex
			justifyContent="center"
			w="100%"
			maxW="container.lg"
			mx="auto"
			px={10}
			mb={50}
		>
			<Box
				textAlign="left"
				marginTop={{
					lg: 10,
				}}
			>
				{renderSection()}
			</Box>
		</Flex>
	)
}
