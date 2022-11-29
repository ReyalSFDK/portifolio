import * as React from "react"
import { Heading, Text } from "@chakra-ui/react";
import { ChoiceButtons } from "../../../components";
import { strings } from "../../../localization";
import { Utils } from "../../../utils";

interface IProps {
	setCurrentSection: (section: Section) => void;
}

export const WelcomeSection: React.FC<IProps> = (props) => {
	const { setCurrentSection } = props;
	const { sections: { welcome }, questions } = strings;

	const choices = [
		{
			question: questions.aboutMe,
			onClick: () => {
				setCurrentSection("aboutMe");
			},
		},
		{
			question: questions.aboutExperience,
			onClick: () => {
				setCurrentSection("experience");
			},
		},
		{
			question: questions.aboutJobs,
			onClick: () => {
				setCurrentSection("jobs");
			},
		},
		{
			question: questions.contact,
			onClick: () => {},
		},
	];

	const headingText = Utils.handleText(welcome.headingText);

	return (
		<>
			<Heading
				size="2xl"
				variant="htmlTags"
				color={Utils.getColorFromString(headingText)}
			>
				{headingText}
			</Heading>
			{
				welcome.paragraphs.map((paragraph, i) => (
					<Text
						variant="htmlTags"
						key={`h-p-${i}`}
					>
						{Utils.handleText(paragraph)}
					</Text>
				))
			}
			<ChoiceButtons
				section="welcome"
				choices={choices}
			/>
		</>
	);
}
