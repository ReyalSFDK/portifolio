import * as React from "react"
import { Heading, Text } from "@chakra-ui/react";
import { ChoiceButtons } from "../../../components";
import { strings } from "../../../localization";
import { Utils } from "../../../utils";

interface IProps {
	setCurrentSection: (section: Section) => void;
}

export const PersonalProjects: React.FC<IProps> = (props) => {
	const { setCurrentSection } = props;
	const { sections: { personalProjects }, questions } = strings;

	const choices = [
		{
			question: questions.aboutMe,
			onClick: () => {
				setCurrentSection("aboutMe")
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
		{
			question: questions.backToWelcome,
			onClick: () => {
				setCurrentSection("welcome");
			},
		},
	];

	return (
		<>
			<Heading
				size="2xl"
				variant="htmlTags"
			>
				{Utils.handleText(personalProjects.headingText)}
			</Heading>
			{
				personalProjects.paragraphs.map((paragraph, i) => (
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
	)
}
